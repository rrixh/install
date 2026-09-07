--[[
    RRixh UI Library
    Mobile + PC Luau interface library

    Loading this file installs simple functions such as page(), button(),
    toggle(), textbox(), kounter(), slider(), kolorpicker() and dropdown().
]]

local s = cloneref or function(srv)
    return srv
end;

local Players = s(game:GetService("Players"))
local UserInputService = s(game:GetService("UserInputService"))
local TweenService = s(game:GetService("TweenService"))
local RunService = s(game:GetService("RunService"))
local TextService = s(game:GetService("TextService"))
local HttpService = s(game:GetService("HttpService"))
local Lighting = s(game:GetService("Lighting")) or game.Lighting;

local LocalPlayer = Players.LocalPlayer

local RRixh = {
    Version = "1.0.0",
    Windows = {},
}

local COLORS = {
    Background = Color3.fromRGB(12, 13, 18),
    Surface = Color3.fromRGB(20, 22, 29),
    Surface2 = Color3.fromRGB(27, 30, 39),
    Surface3 = Color3.fromRGB(35, 38, 49),
    Text = Color3.fromRGB(241, 243, 250),
    Muted = Color3.fromRGB(147, 153, 170),
    Accent = Color3.fromRGB(255, 68, 111),
    Accent2 = Color3.fromRGB(139, 92, 246),
    Success = Color3.fromRGB(59, 205, 132),
    Danger = Color3.fromRGB(245, 72, 86),
    Stroke = Color3.fromRGB(55, 59, 73),
}

-- to prevent mojibake 
local ICONS = {
    Toggle = utf8.char(0x1F47A),
    Home = utf8.char(0x1F3E0),
    Scripts = utf8.char(0x1F9FE),
    ESP = utf8.char(0x1F441),
    Player = utf8.char(0x1F3C3),
    Teleport = utf8.char(0x1F9ED),
    Credits = utf8.char(0x1F451),
    Page = utf8.char(0x1F4C4),
    Search = utf8.char(0x1F50D),
    Clear = utf8.char(0x00D7),
    ChevronRight = utf8.char(0x203A),
    DownTriangle = utf8.char(0x25BC),
    UpTriangle = utf8.char(0x25B2),
}

local function pageIcon(name)
    local lowerName = string.lower(tostring(name or ""))
    if string.find(lowerName, "kredit", 1, true) or string.find(lowerName, "credit", 1, true) then
        return ICONS.Credits
    elseif string.find(lowerName, "teleport", 1, true) then
        return ICONS.Teleport
    elseif string.find(lowerName, "player", 1, true) then
        return ICONS.Player
    elseif string.find(lowerName, "esp", 1, true) then
        return ICONS.ESP
    elseif string.find(lowerName, "skript", 1, true) or string.find(lowerName, "script", 1, true) then
        return ICONS.Scripts
    elseif string.find(lowerName, "home", 1, true) then
        return ICONS.Home
    end
    return ICONS.Page
end;

local function create(className, properties, children)
    local object = Instance.new(className)
    for property, value in pairs(properties or {}) do
        object[property] = value
    end
    for _, child in ipairs(children or {}) do
        child.Parent = object
    end
    return object
end

local function corner(radius)
    return create("UICorner", {CornerRadius = UDim.new(0, radius)})
end

local function stroke(color, transparency, thickness)
    return create("UIStroke", {
        Color = color or COLORS.Stroke,
        Transparency = transparency or 0,
        Thickness = thickness or 1,
    })
end

local function padding(left, right, top, bottom)
    return create("UIPadding", {
        PaddingLeft = UDim.new(0, left or 0),
        PaddingRight = UDim.new(0, right or 0),
        PaddingTop = UDim.new(0, top or 0),
        PaddingBottom = UDim.new(0, bottom or 0),
    })
end

local function tween(object, duration, properties, style, direction)
    local info = TweenInfo.new(
        duration or 0.18,
        style or Enum.EasingStyle.Quint,
        direction or Enum.EasingDirection.Out
    )
    local animation = TweenService:Create(object, info, properties)
    animation:Play()
    return animation
end

local function clamp(value, minimum, maximum)
    return math.max(minimum, math.min(maximum, value))
end

local function roundToStep(value, step)
    if step == 0 then
        return value
    end
    local rounded = math.floor((value / step) + 0.5) * step
    local decimals = math.max(0, math.ceil(-math.log10(step)))
    return tonumber(string.format("%." .. decimals .. "f", rounded))
end

local function pointInside(guiObject, point)
    local position = guiObject.AbsolutePosition
    local size = guiObject.AbsoluteSize
    return point.X >= position.X
        and point.X <= position.X + size.X
        and point.Y >= position.Y
        and point.Y <= position.Y + size.Y
end

local function getGuiParent()
    local customParent
    pcall(function()
        if type(gethui) == "function" then
            customParent = gethui()
        end
    end)
    if customParent then
        return customParent
    end
    return LocalPlayer:WaitForChild("PlayerGui")
end

local function protectGui(screenGui)
    pcall(function()
        if syn and type(syn.protect_gui) == "function" then
            syn.protect_gui(screenGui)
        end
    end)
end

local function safeCallback(window, callback, ...)
    if type(callback) ~= "function" then
        return true
    end
    local success, result = pcall(callback, ...)
    if not success and window and not window._destroyed then
        window:Notify({
            Title = "callback error",
            Text = tostring(result),
            Duration = 5,
            Type = "error",
        })
    end
    return success, result
end

local function makeDraggable(window, handle, target, options)
    options = options or {}
    local activeInput
    local startInput
    local startPosition
    local moved = false
    local beganAt = 0
    local threshold = options.Threshold or 8
    local maxTapTime = options.MaxTapTime or 0.55

    window:_connect(handle.InputBegan, function(input)
        if input.UserInputType ~= Enum.UserInputType.MouseButton1
            and input.UserInputType ~= Enum.UserInputType.Touch then
            return
        end
        -- Keep the window scale-kentered until the user actually starts a drag.
        -- Converting here uses a fully-rendered AbsolutePosition and prevents the
        -- UI from spawning above/off the screen on mobile.
        if target.AnchorPoint ~= Vector2.zero then
            local absolute = target.AbsolutePosition
            target.AnchorPoint = Vector2.zero
            target.Position = UDim2.fromOffset(absolute.X, absolute.Y)
        end
        activeInput = input
        startInput = input.Position
        startPosition = target.Position
        moved = false
        beganAt = os.clock()
    end)

    window:_connect(UserInputService.InputChanged, function(input)
        if not activeInput then
            return
        end
        local matchingTouch = activeInput.UserInputType == Enum.UserInputType.Touch and input == activeInput
        local matchingMouse = activeInput.UserInputType == Enum.UserInputType.MouseButton1
            and input.UserInputType == Enum.UserInputType.MouseMovement
        if not matchingTouch and not matchingMouse then
            return
        end

        local delta = input.Position - startInput
        if delta.Magnitude >= threshold then
            moved = true
        end
        if moved then
            local viewport = workspace.CurrentCamera and workspace.CurrentCamera.ViewportSize or Vector2.new(1280, 720)
            local width = target.AbsoluteSize.X
            local height = target.AbsoluteSize.Y
            local wantedX = startPosition.X.Offset + delta.X
            local wantedY = startPosition.Y.Offset + delta.Y
            local newX = clamp(wantedX, 6, math.max(6, viewport.X - width - 6))
            local newY = clamp(wantedY, 6, math.max(6, viewport.Y - height - 6))
            target.Position = UDim2.fromOffset(newX, newY)
        end
    end)

    window:_connect(UserInputService.InputEnded, function(input)
        if not activeInput then
            return
        end
        local ended = input == activeInput
            or (activeInput.UserInputType == Enum.UserInputType.MouseButton1
                and input.UserInputType == Enum.UserInputType.MouseButton1)
        if not ended then
            return
        end

        local position = input.Position
        local wasTap = not moved
            and (os.clock() - beganAt) <= maxTapTime
            and pointInside(handle, position)
        activeInput = nil
        if wasTap and type(options.OnTap) == "function" then
            options.OnTap()
        end
        if type(options.OnDragEnd) == "function" then
            options.OnDragEnd(moved)
        end
    end)
end

local Window = {}
Window.__index = Window

function Window:_connect(signal, callback)
    local connection = signal:Connect(callback)
    table.insert(self._connections, connection)
    return connection
end

function Window:_registerCleanup(callback)
    table.insert(self._cleanup, callback)
end

function Window:AddCleanup(callback)
    if type(callback) == "function" then
        self:_registerCleanup(callback)
    end
    return callback
end

function Window:SetVisible(visible)
    if self._destroyed then
        return
    end
    self._visible = visible == true
    self.Main.Visible = self._visible
    self.ToggleButton.BackgroundColor3 = self._visible and COLORS.Accent or COLORS.Surface2
    tween(self.ToggleButton, 0.18, {
        Rotation = self._visible and 0 or -8,
    })
end

function Window:Toggle()
    self:SetVisible(not self._visible)
end

function Window:Notify(data, text, duration, notificationType)
    if self._destroyed then
        return
    end
    if type(data) == "string" then
        data = {
            Title = data,
            Text = text,
            Duration = duration,
            Type = notificationType,
        }
    end
    data = data or {}

    local kind = string.lower(tostring(data.Type or "info"))
    local color = COLORS.Accent
    if kind == "success" then
        color = COLORS.Success
    elseif kind == "error" or kind == "danger" then
        color = COLORS.Danger
    end

    local titleText = tostring(data.Title or "notification")
    local bodyText = tostring(data.Text or "")
    local camera = workspace.CurrentCamera
    local viewport = camera and camera.ViewportSize or Vector2.new(1280, 720)
    local notificationWidth = math.max(220, math.min(310, viewport.X - 24))
    local textWidth = math.max(120, notificationWidth - 36)
    local titleHeight = math.max(17, math.ceil(TextService:GetTextSize(
        titleText,
        14,
        Enum.Font.GothamBold,
        Vector2.new(textWidth, 200)
    ).Y))
    local hasBody = bodyText ~= ""
    local bodyHeight = 0
    if hasBody then
        bodyHeight = math.max(15, math.ceil(TextService:GetTextSize(
            bodyText,
            12,
            Enum.Font.Gotham,
            Vector2.new(textWidth, 1000)
        ).Y))
    end
    local bodyTop = 10 + titleHeight + (hasBody and 4 or 0)
    local notificationHeight = bodyTop + bodyHeight + 10

    local item = create("Frame", {
        Name = "Notification",
        BackgroundColor3 = COLORS.Surface,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        Size = UDim2.new(1, 0, 0, notificationHeight),
        Position = UDim2.fromOffset(32, 0),
        ClipsDescendants = true,
        Parent = self.NotificationHolder,
    }, {corner(14), stroke(color, 1, 1)})

    local accent = create("Frame", {
        BackgroundColor3 = color,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        Size = UDim2.fromOffset(4, math.max(18, notificationHeight - 20)),
        Position = UDim2.fromOffset(8, 10),
        Parent = item,
    }, {corner(4)})

    local titleLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(22, 10),
        Size = UDim2.new(1, -36, 0, titleHeight),
        Font = Enum.Font.GothamBold,
        Text = titleText,
        TextColor3 = COLORS.Text,
        TextSize = 14,
        TextTransparency = 1,
        TextWrapped = true,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = item,
    })

    local bodyLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(22, bodyTop),
        Size = UDim2.new(1, -36, 0, bodyHeight),
        Font = Enum.Font.Gotham,
        Text = bodyText,
        TextColor3 = COLORS.Muted,
        TextSize = 12,
        TextTransparency = 1,
        TextWrapped = true,
        TextXAlignment = Enum.TextXAlignment.Left,
        TextYAlignment = Enum.TextYAlignment.Top,
        Visible = hasBody,
        Parent = item,
    })

    tween(item, 0.26, {BackgroundTransparency = 0, Position = UDim2.fromOffset(0, 0)})
    tween(item:FindFirstChildOfClass("UIStroke"), 0.26, {Transparency = 0.25})
    tween(accent, 0.26, {BackgroundTransparency = 0})
    tween(titleLabel, 0.26, {TextTransparency = 0})
    tween(bodyLabel, 0.26, {TextTransparency = 0})

    task.delay(tonumber(data.Duration) or 3.5, function()
        if not item.Parent then
            return
        end
        tween(item, 0.22, {BackgroundTransparency = 1, Position = UDim2.fromOffset(32, 0)})
        tween(accent, 0.22, {BackgroundTransparency = 1})
        tween(titleLabel, 0.22, {TextTransparency = 1})
        tween(bodyLabel, 0.22, {TextTransparency = 1})
        task.delay(0.24, function()
            if item then
                item:Destroy()
            end
        end)
    end)
end

function Window:SelectPage(page)
    if self._destroyed or self._activePage == page then
        return
    end
    for _, otherPage in ipairs(self.Pages) do
        local selected = otherPage == page
        otherPage.Container.Visible = selected
        tween(otherPage.Tab, 0.16, {
            BackgroundTransparency = selected and 0 or 1,
            BackgroundColor3 = selected and COLORS.Surface3 or COLORS.Surface,
            TextColor3 = selected and COLORS.Text or COLORS.Muted,
        })
        otherPage.TabAccent.Visible = selected
    end
    self._activePage = page
    page.Container.Position = UDim2.fromOffset(10, 0)
    tween(page.Container, 0.2, {Position = UDim2.fromOffset(0, 0)})
end

function Window:_destroyNow()
    if self._destroyed then
        return
    end

    -- Turn every enabled toggle off before any GUI or connection is removed.
    for _, toggleController in ipairs(self._toggles) do
        if toggleController.Get and toggleController:Get() then
            toggleController:Set(false, false)
        end
    end
    for index = #self._cleanup, 1, -1 do
        pcall(self._cleanup[index])
    end

    self._destroyed = true
    for _, connection in ipairs(self._connections) do
        pcall(function()
            connection:Disconnect()
        end)
    end
    table.clear(self._connections)
    table.clear(self._cleanup)

    if self.ScreenGui then
        self.ScreenGui:Destroy()
    end
    for key, value in pairs(RRixh.Windows) do
        if value == self then
            RRixh.Windows[key] = nil
            RRixh[key] = nil
        end
    end
end

function Window:ConfirmDestroy()
    if self._destroyed or self._confirmingDestroy then
        return
    end
    self._confirmingDestroy = true

    local shade = create("Frame", {
        Name = "DestroyConfirmation",
        BackgroundColor3 = Color3.new(0, 0, 0),
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        Size = UDim2.fromScale(1, 1),
        ZIndex = 50,
        Parent = self.Main,
    })
    local modal = create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = COLORS.Surface,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        Position = UDim2.fromScale(0.5, 0.5),
        Size = UDim2.fromOffset(330, 174),
        ZIndex = 51,
        Parent = shade,
    }, {corner(16), stroke(COLORS.Stroke, 1, 1)})

    local icon = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(18, 15),
        Size = UDim2.fromOffset(34, 34),
        Font = Enum.Font.GothamBold,
        Text = "!",
        TextColor3 = COLORS.Danger,
        TextSize = 25,
        TextTransparency = 1,
        ZIndex = 52,
        Parent = modal,
    })
    local title = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(56, 15),
        Size = UDim2.new(1, -74, 0, 27),
        Font = Enum.Font.GothamBold,
        Text = "destroy the ui?",
        TextColor3 = COLORS.Text,
        TextSize = 18,
        TextTransparency = 1,
        TextXAlignment = Enum.TextXAlignment.Left,
        ZIndex = 52,
        Parent = modal,
    })
    local body = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(20, 53),
        Size = UDim2.new(1, -40, 0, 45),
        Font = Enum.Font.Gotham,
        Text = "enabled toggles will be disabled first, then every connection and ui object will be removed.",
        TextColor3 = COLORS.Muted,
        TextSize = 12,
        TextTransparency = 1,
        TextWrapped = true,
        TextXAlignment = Enum.TextXAlignment.Left,
        TextYAlignment = Enum.TextYAlignment.Top,
        ZIndex = 52,
        Parent = modal,
    })
    local cancel = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Surface3,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        Position = UDim2.new(0, 20, 1, -56),
        Size = UDim2.new(0.5, -26, 0, 38),
        Font = Enum.Font.GothamBold,
        Text = "kancel",
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextTransparency = 1,
        ZIndex = 52,
        Parent = modal,
    }, {corner(9)})
    local destroy = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Danger,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        Position = UDim2.new(0.5, 6, 1, -56),
        Size = UDim2.new(0.5, -26, 0, 38),
        Font = Enum.Font.GothamBold,
        Text = "destroy",
        TextColor3 = Color3.new(1, 1, 1),
        TextSize = 13,
        TextTransparency = 1,
        ZIndex = 52,
        Parent = modal,
    }, {corner(9)})

    local function closeModal()
        if not shade.Parent then
            return
        end
        self._confirmingDestroy = false
        tween(shade, 0.16, {BackgroundTransparency = 1})
        tween(modal, 0.16, {BackgroundTransparency = 1, Size = UDim2.fromOffset(306, 158)})
        task.delay(0.17, function()
            if shade then
                shade:Destroy()
            end
        end)
    end

    self:_connect(cancel.Activated, closeModal)
    self:_connect(destroy.Activated, function()
        self:_destroyNow()
    end)

    tween(shade, 0.2, {BackgroundTransparency = 0.28})
    tween(modal, 0.22, {BackgroundTransparency = 0, Size = UDim2.fromOffset(330, 174)})
    tween(modal:FindFirstChildOfClass("UIStroke"), 0.22, {Transparency = 0.25})
    for _, object in ipairs({icon, title, body, cancel, destroy}) do
        local property = object:IsA("TextButton") and "TextTransparency" or "TextTransparency"
        tween(object, 0.22, {[property] = 0, BackgroundTransparency = object:IsA("TextButton") and 0 or 1})
    end
end

function Window:Destroy(skipConfirmation)
    if skipConfirmation == true then
        self:_destroyNow()
    else
        self:ConfirmDestroy()
    end
end

local Page = {}
Page.__index = Page

function Page:_track(frame, searchText)
    table.insert(self._searchItems, {
        Frame = frame,
        Text = string.lower(tostring(searchText or "")),
    })
    return frame
end

function Page:_filter(query)
    query = string.lower(query or "")
    for _, item in ipairs(self._searchItems) do
        if item.Frame and item.Frame.Parent then
            item.Frame.Visible = query == "" or string.find(item.Text, query, 1, true) ~= nil
        end
    end
end

function Page:_row(height, searchText)
    local row = create("Frame", {
        BackgroundColor3 = COLORS.Surface2,
        BorderSizePixel = 0,
        Size = UDim2.new(1, 0, 0, height or 48),
        Parent = self.Scroll,
    }, {corner(10), stroke(COLORS.Stroke, 0.55, 1)})
    self:_track(row, searchText)
    return row
end

function Page:Section(text)
    local section = create("TextLabel", {
        BackgroundTransparency = 1,
        Size = UDim2.new(1, 0, 0, 30),
        Font = Enum.Font.GothamBold,
        Text = string.upper(tostring(text or "section")),
        TextColor3 = COLORS.Muted,
        TextSize = 11,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = self.Scroll,
    }, {padding(4, 0, 7, 0)})
    return self:_track(section, text)
end

function Page:Label(titleText, bodyText)
    if bodyText == nil then
        bodyText = titleText
        titleText = "label"
    end
    local row = self:_row(62, tostring(titleText) .. " " .. tostring(bodyText))
    create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 8),
        Size = UDim2.new(1, -28, 0, 20),
        Font = Enum.Font.GothamBold,
        Text = tostring(titleText),
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextXAlignment = Enum.TextXAlignment.Left,
        TextTruncate = Enum.TextTruncate.AtEnd,
        Parent = row,
    })
    local body = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 29),
        Size = UDim2.new(1, -28, 0, 23),
        Font = Enum.Font.Gotham,
        Text = tostring(bodyText),
        TextColor3 = COLORS.Muted,
        TextSize = 12,
        TextWrapped = true,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    return {
        Set = function(_, newText)
            body.Text = tostring(newText)
        end,
    }
end

function Page:PlainLabel(text)
    local row = self:_row(42, text)
    local textLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 0),
        Size = UDim2.new(1, -28, 1, 0),
        Font = Enum.Font.Gotham,
        Text = tostring(text or "label"),
        TextColor3 = COLORS.Muted,
        TextSize = 12,
        TextWrapped = true,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    return {
        Set = function(_, newText)
            textLabel.Text = tostring(newText or "")
        end,
    }
end

function Page:CreditsCard(config)
    config = config or {}
    local userId = tonumber(config.UserId) or 3001347724
    local username = tostring(config.Username or "lulaslollipop")
    local joinedDate = tostring(config.JoinedDate or "October 23, 2021")
    local row = self:_row(220, username .. " " .. joinedDate)

    local avatarHolder = create("Frame", {
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        ClipsDescendants = true,
        Position = UDim2.fromOffset(16, 20),
        Size = UDim2.fromOffset(160, 160),
        Parent = row,
    }, {corner(80), stroke(COLORS.Danger, 0, 3)})
    local avatar = create("ImageLabel", {
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        Image = "",
        ImageTransparency = 1,
        Position = UDim2.fromOffset(5, 5),
        ScaleType = Enum.ScaleType.Fit,
        Size = UDim2.new(1, -10, 1, -10),
        Parent = avatarHolder,
    }, {corner(75)})
    local handleLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(196, 45),
        Size = UDim2.new(1, -212, 0, 20),
        Font = Enum.Font.GothamBold,
        Text = "username: @" .. username,
        TextColor3 = COLORS.Text,
        TextSize = 11,
        TextTruncate = Enum.TextTruncate.AtEnd,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local displayLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(196, 73),
        Size = UDim2.new(1, -212, 0, 20),
        Font = Enum.Font.Gotham,
        Text = "display name: loading",
        TextColor3 = COLORS.Muted,
        TextSize = 10,
        TextTruncate = Enum.TextTruncate.AtEnd,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local joinedLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(196, 129),
        Size = UDim2.new(1, -212, 0, 20),
        Font = Enum.Font.Gotham,
        Text = "join date: " .. joinedDate,
        TextColor3 = COLORS.Muted,
        TextSize = 10,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local idLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(196, 101),
        Size = UDim2.new(1, -212, 0, 20),
        Font = Enum.Font.Gotham,
        Text = "user id: " .. tostring(userId),
        TextColor3 = COLORS.Muted,
        TextSize = 10,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local infoLabels = {
        handleLabel,
        displayLabel,
        idLabel,
        joinedLabel,
    }
    local function updateCardLayout()
        if not row.Parent then
            return
        end
        local compact = row.AbsoluteSize.X < 390
        if compact then
            row.Size = UDim2.new(1, 0, 0, 326)
            avatarHolder.Position = UDim2.new(0.5, -80, 0, 18)
            local positions = {194, 222, 250, 278}
            for index, labelObject in ipairs(infoLabels) do
                labelObject.Position = UDim2.fromOffset(12, positions[index])
                labelObject.Size = UDim2.new(1, -24, 0, 20)
                labelObject.TextXAlignment = Enum.TextXAlignment.Center
            end
        else
            row.Size = UDim2.new(1, 0, 0, 220)
            avatarHolder.Position = UDim2.fromOffset(16, 20)
            local positions = {45, 73, 101, 129}
            for index, labelObject in ipairs(infoLabels) do
                labelObject.Position = UDim2.fromOffset(196, positions[index])
                labelObject.Size = UDim2.new(1, -212, 0, 20)
                labelObject.TextXAlignment = Enum.TextXAlignment.Left
            end
        end
    end
    self.Window:_connect(row:GetPropertyChangedSignal("AbsoluteSize"), updateCardLayout)
    task.defer(updateCardLayout)

    local monthNames = {
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    }
    local function formatRobloxDate(value)
        local year, month, day = tostring(value or ""):match("^(%d%d%d%d)%-(%d%d)%-(%d%d)")
        month = tonumber(month)
        day = tonumber(day)
        if not year or not month or not day or not monthNames[month] then
            return nil
        end
        return string.format("%s %d, %s", monthNames[month], day, year)
    end

    local alive = true
    self.Window:_registerCleanup(function()
        alive = false
    end)

    local function applyUsername(name)
        if type(name) ~= "string" or name == "" then
            return
        end
        handleLabel.Text = "username: @" .. name
    end

    local function refreshOwnerInfo()
        local okName, currentName = pcall(Players.GetNameFromUserIdAsync, Players, userId)
        if alive and row.Parent and okName then
            applyUsername(currentName)
        end

        local okProfile, profileData = pcall(function()
            local response = game:HttpGet("https://users.roblox.com/v1/users/" .. tostring(userId), true)
            return HttpService:JSONDecode(response)
        end)
        if alive and row.Parent and okProfile and type(profileData) == "table" then
            applyUsername(profileData.name)
            if type(profileData.displayName) == "string" and profileData.displayName ~= "" then
                displayLabel.Text = "display name: " .. profileData.displayName
            end
            local formatted = formatRobloxDate(profileData.created)
            if formatted then
                joinedLabel.Text = "join date: " .. formatted
            end
        elseif alive and row.Parent then
            displayLabel.Text = "display name: " .. username
        end
    end

    local function refreshAvatar()
        local ok, image, ready = pcall(
            Players.GetUserThumbnailAsync,
            Players,
            userId,
            Enum.ThumbnailType.AvatarThumbnail,
            Enum.ThumbnailSize.Size420x420
        )
        if alive and row.Parent and ok and image and (ready == nil or ready == true) then
            avatar.Image = image
            tween(avatar, 0.22, {ImageTransparency = 0})
        end
    end

    task.spawn(function()
        refreshOwnerInfo()
        while alive and row.Parent and not self.Window._destroyed do
            refreshAvatar()
            for _ = 1, 60 do
                if not alive or not row.Parent or self.Window._destroyed then
                    return
                end
                task.wait(1)
            end
        end
    end)

    return {
        Avatar = avatar,
        Username = handleLabel,
        DisplayName = displayLabel,
        Joined = joinedLabel,
        UserId = idLabel,
    }
end
function Page:Button(text, callback)
    local row = self:_row(48, text)
    local button = create("TextButton", {
        AutoButtonColor = false,
        BackgroundTransparency = 1,
        Size = UDim2.fromScale(1, 1),
        Font = Enum.Font.GothamBold,
        Text = tostring(text or "button"),
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    }, {padding(14, 45, 0, 0)})
    create("TextLabel", {
        BackgroundTransparency = 1,
        AnchorPoint = Vector2.new(1, 0.5),
        Position = UDim2.new(1, -14, 0.5, 0),
        Size = UDim2.fromOffset(22, 22),
        Font = Enum.Font.GothamBold,
        Text = ICONS.ChevronRight,
        TextColor3 = COLORS.Accent,
        TextSize = 24,
        Parent = row,
    })

    self.Window:_connect(button.MouseEnter, function()
        tween(row, 0.14, {BackgroundColor3 = COLORS.Surface3})
    end)
    self.Window:_connect(button.MouseLeave, function()
        tween(row, 0.14, {BackgroundColor3 = COLORS.Surface2})
    end)
    self.Window:_connect(button.Activated, function()
        tween(row, 0.08, {BackgroundColor3 = COLORS.Accent})
        task.delay(0.09, function()
            if row.Parent then
                tween(row, 0.18, {BackgroundColor3 = COLORS.Surface2})
            end
        end)
        safeCallback(self.Window, callback)
    end)
    return button
end

function Page:Toggle(text, default, callback)
    local row = self:_row(50, text)
    local state = default == true
    local button = create("TextButton", {
        AutoButtonColor = false,
        BackgroundTransparency = 1,
        Size = UDim2.fromScale(1, 1),
        Text = "",
        Parent = row,
    })
    create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 0),
        Size = UDim2.new(1, -76, 1, 0),
        Font = Enum.Font.GothamBold,
        Text = tostring(text or "toggle"),
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local track = create("Frame", {
        AnchorPoint = Vector2.new(1, 0.5),
        BackgroundColor3 = state and COLORS.Accent or COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -14, 0.5, 0),
        Size = UDim2.fromOffset(44, 24),
        Parent = row,
    }, {corner(12)})
    local knob = create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = Color3.new(1, 1, 1),
        BorderSizePixel = 0,
        Position = state and UDim2.new(1, -12, 0.5, 0) or UDim2.fromOffset(12, 12),
        Size = UDim2.fromOffset(18, 18),
        Parent = track,
    }, {corner(9)})

    local controller = {Window = self.Window}
    function controller:Set(value, silent)
        value = value == true
        if state == value then
            return
        end
        state = value
        tween(track, 0.16, {BackgroundColor3 = state and COLORS.Accent or COLORS.Surface3})
        tween(knob, 0.18, {
            Position = state and UDim2.new(1, -12, 0.5, 0) or UDim2.fromOffset(12, 12),
        })
        if not silent then
            safeCallback(self.Window, callback, state)
        end
    end
    function controller:Get()
        return state
    end

    self.Window:_connect(button.Activated, function()
        controller:Set(not state, false)
    end)
    table.insert(self.Window._toggles, controller)
    if state then
        task.defer(function()
            if not self.Window._destroyed then
                safeCallback(self.Window, callback, true)
            end
        end)
    end
    return controller
end

function Page:Slider(text, minimum, maximum, default, step, callback)
    minimum = tonumber(minimum) or 0
    maximum = tonumber(maximum) or 100
    if maximum < minimum then
        minimum, maximum = maximum, minimum
    end
    step = math.max(tonumber(step) or 1, 0.000001)
    local value = clamp(tonumber(default) or minimum, minimum, maximum)
    value = roundToStep(value, step)

    local row = self:_row(68, text)
    create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 6),
        Size = UDim2.new(1, -82, 0, 24),
        Font = Enum.Font.GothamBold,
        Text = tostring(text or "slider"),
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local valueLabel = create("TextLabel", {
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -62, 0, 7),
        Size = UDim2.fromOffset(48, 22),
        Font = Enum.Font.GothamBold,
        Text = tostring(value),
        TextColor3 = COLORS.Accent,
        TextSize = 11,
        Parent = row,
    }, {corner(6)})
    local bar = create("Frame", {
        Active = true,
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.fromOffset(14, 45),
        Size = UDim2.new(1, -28, 0, 7),
        Parent = row,
    }, {corner(4)})
    local fill = create("Frame", {
        BackgroundColor3 = COLORS.Accent,
        BorderSizePixel = 0,
        Size = UDim2.fromScale((value - minimum) / math.max(maximum - minimum, 0.000001), 1),
        Parent = bar,
    }, {corner(4)})
    local knob = create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = Color3.new(1, 1, 1),
        BorderSizePixel = 0,
        Position = UDim2.fromScale((value - minimum) / math.max(maximum - minimum, 0.000001), 0.5),
        Size = UDim2.fromOffset(16, 16),
        Parent = bar,
    }, {corner(8), stroke(COLORS.Accent, 0, 2)})

    local dragging = false
    local dragInput
    local controller = {Window = self.Window}

    local function setFromX(x, invoke)
        local alpha = clamp((x - bar.AbsolutePosition.X) / math.max(bar.AbsoluteSize.X, 1), 0, 1)
        local newValue = roundToStep(minimum + ((maximum - minimum) * alpha), step)
        newValue = clamp(newValue, minimum, maximum)
        value = newValue
        local ratio = (value - minimum) / math.max(maximum - minimum, 0.000001)
        valueLabel.Text = tostring(value)
        fill.Size = UDim2.fromScale(ratio, 1)
        knob.Position = UDim2.fromScale(ratio, 0.5)
        if invoke then
            safeCallback(self.Window, callback, value)
        end
    end

    function controller:Set(newValue, silent)
        newValue = clamp(roundToStep(tonumber(newValue) or value, step), minimum, maximum)
        value = newValue
        local ratio = (value - minimum) / math.max(maximum - minimum, 0.000001)
        valueLabel.Text = tostring(value)
        tween(fill, 0.12, {Size = UDim2.fromScale(ratio, 1)})
        tween(knob, 0.12, {Position = UDim2.fromScale(ratio, 0.5)})
        if not silent then
            safeCallback(self.Window, callback, value)
        end
    end
    function controller:Get()
        return value
    end

    self.Window:_connect(bar.InputBegan, function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1
            or input.UserInputType == Enum.UserInputType.Touch then
            dragging = true
            dragInput = input
            setFromX(input.Position.X, true)
        end
    end)
    self.Window:_connect(UserInputService.InputChanged, function(input)
        if not dragging then
            return
        end
        local match = input == dragInput
            or (dragInput and dragInput.UserInputType == Enum.UserInputType.MouseButton1
                and input.UserInputType == Enum.UserInputType.MouseMovement)
        if match then
            setFromX(input.Position.X, true)
        end
    end)
    self.Window:_connect(UserInputService.InputEnded, function(input)
        if input == dragInput
            or (dragInput and dragInput.UserInputType == Enum.UserInputType.MouseButton1
                and input.UserInputType == Enum.UserInputType.MouseButton1) then
            dragging = false
            dragInput = nil
        end
    end)
    return controller
end

function Page:Counter(text, minimum, maximum, default, step, callback)
    minimum = tonumber(minimum) or 0
    maximum = tonumber(maximum) or 100
    if maximum < minimum then
        minimum, maximum = maximum, minimum
    end
    step = math.max(math.abs(tonumber(step) or 1), 0.000001)

    local function contextualDefault()
        local lowered = string.lower(tostring(text or "")):gsub("[%s%p_]", "")
        if string.find(lowered, "gravity", 1, true) then
            return workspace.Gravity
        end
        local character = LocalPlayer and LocalPlayer.Character
        local humanoid = character and character:FindFirstChildOfClass("Humanoid")
        if not humanoid then
            return nil
        end
        if (string.find(lowered, "walkspeed", 1, true) or lowered == "speed")
            and not string.find(lowered, "tp", 1, true)
            and not string.find(lowered, "teleport", 1, true) then
            return humanoid.WalkSpeed
        elseif string.find(lowered, "jumppower", 1, true) then
            return humanoid.JumpPower
        elseif string.find(lowered, "jumpheight", 1, true) then
            return humanoid.JumpHeight
        elseif string.find(lowered, "hipheight", 1, true) then
            return humanoid.HipHeight
        elseif string.find(lowered, "health", 1, true) then
            return humanoid.Health
        end
        return nil
    end

    local resetValue = tonumber(contextualDefault()) or tonumber(default) or minimum
    resetValue = clamp(roundToStep(resetValue, step), minimum, maximum)
    local value = resetValue
    local row = self:_row(50, text)
    create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 0),
        Size = UDim2.new(1, -216, 1, 0),
        Font = Enum.Font.GothamBold,
        Text = tostring(text or "kounter"),
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextTruncate = Enum.TextTruncate.AtEnd,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local reset = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -202, 0.5, -13),
        Size = UDim2.fromOffset(52, 26),
        Font = Enum.Font.GothamBold,
        Text = "Reset",
        TextColor3 = COLORS.Muted,
        TextSize = 9,
        Parent = row,
    }, {corner(7)})
    local minus = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -142, 0.5, -15),
        Size = UDim2.fromOffset(30, 30),
        Font = Enum.Font.GothamBold,
        Text = "-",
        TextColor3 = COLORS.Text,
        TextSize = 17,
        Parent = row,
    }, {corner(8)})
    local valueLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.new(1, -108, 0.5, -15),
        Size = UDim2.fromOffset(60, 30),
        Font = Enum.Font.GothamBold,
        Text = tostring(value),
        TextColor3 = COLORS.Accent,
        TextSize = 11,
        TextScaled = false,
        Parent = row,
    })
    local plus = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Accent,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -44, 0.5, -15),
        Size = UDim2.fromOffset(30, 30),
        Font = Enum.Font.GothamBold,
        Text = "+",
        TextColor3 = Color3.new(1, 1, 1),
        TextSize = 17,
        Parent = row,
    }, {corner(8)})

    local controller = {Window = self.Window}
    function controller:Set(newValue, silent)
        value = clamp(roundToStep(tonumber(newValue) or value, step), minimum, maximum)
        valueLabel.Text = tostring(value)
        if not silent then
            safeCallback(self.Window, callback, value)
        end
    end
    function controller:Get()
        return value
    end
    function controller:Reset(silent)
        self:Set(resetValue, silent)
    end
    function controller:SetResetValue(newValue)
        resetValue = clamp(roundToStep(tonumber(newValue) or resetValue, step), minimum, maximum)
    end

    self.Window:_connect(reset.Activated, function()
        controller:Reset(false)
    end)
    self.Window:_connect(minus.Activated, function()
        controller:Set(value - step, false)
    end)
    self.Window:_connect(plus.Activated, function()
        controller:Set(value + step, false)
    end)
    return controller
end
function Page:Textbox(text, placeholder, callback)
    local row = self:_row(74, tostring(text) .. " " .. tostring(placeholder))
    create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 5),
        Size = UDim2.new(1, -28, 0, 22),
        Font = Enum.Font.GothamBold,
        Text = tostring(text or "textbox"),
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local box = create("TextBox", {
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        ClearTextOnFocus = false,
        Position = UDim2.fromOffset(12, 32),
        Size = UDim2.new(1, -60, 0, 32),
        Font = Enum.Font.Gotham,
        PlaceholderColor3 = COLORS.Muted,
        PlaceholderText = tostring(placeholder or "enter text"),
        Text = "",
        TextColor3 = COLORS.Text,
        TextSize = 12,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    }, {corner(8), padding(10, 10, 0, 0)})
    local clear = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -46, 0, 32),
        Size = UDim2.fromOffset(34, 32),
        Font = Enum.Font.GothamBold,
        Text = ICONS.Clear,
        TextColor3 = COLORS.Danger,
        TextSize = 17,
        Visible = false,
        Parent = row,
    }, {corner(8)})
    self.Window:_connect(box:GetPropertyChangedSignal("Text"), function()
        clear.Visible = box.Text ~= ""
    end)
    self.Window:_connect(clear.Activated, function()
        box.Text = ""
        box:CaptureFocus()
    end)
    self.Window:_connect(box.FocusLost, function(enterPressed)
        -- Focus loss alone never submits. Enter/Return must be intentionally pressed.
        if enterPressed then
            safeCallback(self.Window, callback, box.Text)
        end
    end)
    return {
        Set = function(_, newText)
            box.Text = tostring(newText or "")
        end,
        Get = function()
            return box.Text
        end,
        Instance = box,
        ClearButton = clear,
    }
end

function Page:Dropdown(text, options, default, callback)
    options = options or {}
    local selected = default ~= nil and tostring(default) or tostring(options[1] or "none")
    local open = false
    local collapsedHeight = 50
    local optionHeight = 34
    local visibleOptions = math.min(4, #options)
    local listHeight = visibleOptions * optionHeight
    local expandedHeight = collapsedHeight + listHeight + 6
    local row = self:_row(collapsedHeight, tostring(text) .. " " .. table.concat(options, " "))
    row.ClipsDescendants = true
    create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 0),
        Size = UDim2.new(0.5, -14, 0, collapsedHeight),
        Font = Enum.Font.GothamBold,
        Text = tostring(text or "dropdown"),
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextTruncate = Enum.TextTruncate.AtEnd,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local selectedButton = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.new(0.5, 0, 0, 9),
        Size = UDim2.new(0.5, -14, 0, 32),
        Font = Enum.Font.GothamBold,
        Text = "",
        TextColor3 = COLORS.Accent,
        TextSize = 11,
        TextTruncate = Enum.TextTruncate.AtEnd,
        Parent = row,
    }, {corner(8)})
    local selectedLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(10, 0),
        Size = UDim2.new(1, -40, 1, 0),
        Font = Enum.Font.GothamBold,
        Text = selected,
        TextColor3 = COLORS.Accent,
        TextSize = 11,
        TextTruncate = Enum.TextTruncate.AtEnd,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = selectedButton,
    })
    local arrowHolder = create("Frame", {
        AnchorPoint = Vector2.new(1, 0.5),
        BackgroundTransparency = 1,
        Position = UDim2.new(1, -8, 0.5, 0),
        Size = UDim2.fromOffset(18, 18),
        Parent = selectedButton,
    })
    local arrowLeft = create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = COLORS.Accent,
        BorderSizePixel = 0,
        Position = UDim2.fromOffset(6, 9),
        Rotation = 45,
        Size = UDim2.fromOffset(8, 2),
        Parent = arrowHolder,
    }, {corner(2)})
    local arrowRight = create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = COLORS.Accent,
        BorderSizePixel = 0,
        Position = UDim2.fromOffset(12, 9),
        Rotation = -45,
        Size = UDim2.fromOffset(8, 2),
        Parent = arrowHolder,
    }, {corner(2)})

    local list = create("ScrollingFrame", {
        Active = true,
        AutomaticCanvasSize = Enum.AutomaticSize.Y,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        CanvasSize = UDim2.new(),
        Position = UDim2.fromOffset(10, collapsedHeight),
        ScrollBarImageColor3 = COLORS.Accent,
        ScrollBarThickness = #options > 4 and 2 or 0,
        ScrollingDirection = Enum.ScrollingDirection.Y,
        Size = UDim2.new(1, -20, 0, listHeight),
        Parent = row,
    }, {
        create("UIListLayout", {
            Padding = UDim.new(0, 3),
            SortOrder = Enum.SortOrder.LayoutOrder,
        }),
        padding(0, 4, 0, 0),
    })

    local controller = {Window = self.Window}
    local optionButtons = {}
    local function setOpen(value)
        open = value == true and #options > 0
        tween(arrowLeft, 0.16, {Rotation = open and -45 or 45})
        tween(arrowRight, 0.16, {Rotation = open and 45 or -45})
        tween(row, 0.2, {
            Size = UDim2.new(1, 0, 0, open and expandedHeight or collapsedHeight),
        })
    end
    function controller:Set(value, silent)
        selected = tostring(value)
        selectedLabel.Text = selected
        for optionText, optionButton in pairs(optionButtons) do
            optionButton.TextColor3 = optionText == selected and COLORS.Accent or COLORS.Muted
            optionButton.BackgroundTransparency = optionText == selected and 0.08 or 0.35
        end
        setOpen(false)
        if not silent then
            safeCallback(self.Window, callback, selected)
        end
    end
    function controller:Get()
        return selected
    end
    function controller:SetOpen(value)
        setOpen(value)
    end

    for order, option in ipairs(options) do
        local optionText = tostring(option)
        local optionButton = create("TextButton", {
            AutoButtonColor = false,
            BackgroundColor3 = COLORS.Surface3,
            BackgroundTransparency = optionText == selected and 0.08 or 0.35,
            BorderSizePixel = 0,
            LayoutOrder = order,
            Size = UDim2.new(1, -4, 0, optionHeight - 3),
            Font = Enum.Font.Gotham,
            Text = optionText,
            TextColor3 = optionText == selected and COLORS.Accent or COLORS.Muted,
            TextSize = 11,
            Parent = list,
        }, {corner(7)})
        optionButtons[optionText] = optionButton
        self.Window:_connect(optionButton.Activated, function()
            controller:Set(optionText, false)
        end)
    end
    self.Window:_connect(selectedButton.Activated, function()
        setOpen(not open)
    end)
    return controller
end
function Page:ColorPicker(text, default, callback)
    local color = typeof(default) == "Color3" and default or COLORS.Accent
    local hue, saturation, value = color:ToHSV()
    local open = false
    local collapsedHeight = 50
    local expandedHeight = 218
    local row = self:_row(collapsedHeight, text)
    row.ClipsDescendants = true

    create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 0),
        Size = UDim2.new(1, -78, 0, collapsedHeight),
        Font = Enum.Font.GothamBold,
        Text = tostring(text or "kolor picker"),
        TextColor3 = COLORS.Text,
        TextSize = 13,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = row,
    })
    local swatch = create("TextButton", {
        AutoButtonColor = false,
        AnchorPoint = Vector2.new(1, 0.5),
        BackgroundColor3 = color,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -14, 0, collapsedHeight / 2),
        Size = UDim2.fromOffset(46, 28),
        Text = "",
        Parent = row,
    }, {corner(8), stroke(Color3.new(1, 1, 1), 0.75, 1)})
    local panel = create("Frame", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(14, 57),
        Size = UDim2.new(1, -28, 0, 148),
        Parent = row,
    })

    -- The main picker always contains the complete rainbow horizontally.
    -- Moving vertically changes saturation from white to full kolor.
    local colorArea = create("Frame", {
        BackgroundColor3 = Color3.new(1, 1, 1),
        BorderSizePixel = 0,
        ClipsDescendants = true,
        Size = UDim2.new(1, -42, 1, 0),
        Parent = panel,
    }, {
        corner(8),
        create("UIGradient", {
            Color = ColorSequence.new({
                ColorSequenceKeypoint.new(0, Color3.fromHSV(0, 1, 1)),
                ColorSequenceKeypoint.new(0.17, Color3.fromHSV(0.17, 1, 1)),
                ColorSequenceKeypoint.new(0.33, Color3.fromHSV(0.33, 1, 1)),
                ColorSequenceKeypoint.new(0.5, Color3.fromHSV(0.5, 1, 1)),
                ColorSequenceKeypoint.new(0.67, Color3.fromHSV(0.67, 1, 1)),
                ColorSequenceKeypoint.new(0.83, Color3.fromHSV(0.83, 1, 1)),
                ColorSequenceKeypoint.new(1, Color3.fromHSV(1, 1, 1)),
            }),
        }),
    })
    local whiteOverlay = create("Frame", {
        BackgroundColor3 = Color3.new(1, 1, 1),
        BorderSizePixel = 0,
        Size = UDim2.fromScale(1, 1),
        ZIndex = 2,
        Parent = colorArea,
    }, {
        corner(8),
        create("UIGradient", {
            Rotation = 90,
            Transparency = NumberSequence.new({
                NumberSequenceKeypoint.new(0, 0),
                NumberSequenceKeypoint.new(1, 1),
            }),
        }),
    })
    local colorInput = create("TextButton", {
        AutoButtonColor = false,
        BackgroundTransparency = 1,
        Size = UDim2.fromScale(1, 1),
        Text = "",
        ZIndex = 3,
        Parent = colorArea,
    })
    local colorMarker = create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = color,
        BorderSizePixel = 0,
        Position = UDim2.fromScale(hue, saturation),
        Size = UDim2.fromOffset(15, 15),
        ZIndex = 4,
        Parent = colorArea,
    }, {corner(8), stroke(Color3.new(1, 1, 1), 0, 2)})

    -- The side bar controls only light/dark value.
    local valueBar = create("Frame", {
        Active = true,
        BackgroundColor3 = Color3.new(1, 1, 1),
        BorderSizePixel = 0,
        Position = UDim2.new(1, -30, 0, 0),
        Size = UDim2.fromOffset(30, 148),
        Parent = panel,
    }, {
        corner(8),
        create("UIGradient", {
            Rotation = 90,
            Color = ColorSequence.new(Color3.new(1, 1, 1), Color3.new(0, 0, 0)),
        }),
    })
    local valueMarker = create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = color,
        BorderSizePixel = 0,
        Position = UDim2.fromScale(0.5, 1 - value),
        Size = UDim2.new(1, 6, 0, 5),
        ZIndex = 4,
        Parent = valueBar,
    }, {corner(3), stroke(Color3.new(1, 1, 1), 0, 1)})

    local controller = {Window = self.Window}
    local activeDrag
    local dragMode

    local function updateColor(invoke)
        color = Color3.fromHSV(hue, saturation, value)
        swatch.BackgroundColor3 = color
        colorMarker.BackgroundColor3 = color
        colorMarker.Position = UDim2.fromScale(hue, saturation)
        valueMarker.BackgroundColor3 = color
        valueMarker.Position = UDim2.fromScale(0.5, 1 - value)
        if invoke then
            safeCallback(self.Window, callback, color)
        end
    end
    local function updateFromInput(input)
        if dragMode == "color" then
            hue = clamp(
                (input.Position.X - colorArea.AbsolutePosition.X) / math.max(colorArea.AbsoluteSize.X, 1),
                0,
                1
            )
            saturation = clamp(
                (input.Position.Y - colorArea.AbsolutePosition.Y) / math.max(colorArea.AbsoluteSize.Y, 1),
                0,
                1
            )
        elseif dragMode == "value" then
            value = 1 - clamp(
                (input.Position.Y - valueBar.AbsolutePosition.Y) / math.max(valueBar.AbsoluteSize.Y, 1),
                0,
                1
            )
        end
        updateColor(true)
    end
    local function beginDrag(mode, input)
        if input.UserInputType ~= Enum.UserInputType.MouseButton1
            and input.UserInputType ~= Enum.UserInputType.Touch then
            return
        end
        activeDrag = input
        dragMode = mode
        updateFromInput(input)
    end

    function controller:Set(newColor, silent)
        if typeof(newColor) ~= "Color3" then
            return
        end
        color = newColor
        hue, saturation, value = color:ToHSV()
        updateColor(not silent)
    end
    function controller:Get()
        return color
    end

    self.Window:_connect(swatch.Activated, function()
        open = not open
        tween(row, 0.2, {
            Size = UDim2.new(1, 0, 0, open and expandedHeight or collapsedHeight),
        })
    end)
    self.Window:_connect(colorInput.InputBegan, function(input)
        beginDrag("color", input)
    end)
    self.Window:_connect(valueBar.InputBegan, function(input)
        beginDrag("value", input)
    end)
    self.Window:_connect(UserInputService.InputChanged, function(input)
        if not activeDrag then
            return
        end
        local match = input == activeDrag
            or (activeDrag.UserInputType == Enum.UserInputType.MouseButton1
                and input.UserInputType == Enum.UserInputType.MouseMovement)
        if match then
            updateFromInput(input)
        end
    end)
    self.Window:_connect(UserInputService.InputEnded, function(input)
        if input == activeDrag
            or (activeDrag and activeDrag.UserInputType == Enum.UserInputType.MouseButton1
                and input.UserInputType == Enum.UserInputType.MouseButton1) then
            activeDrag = nil
            dragMode = nil
        end
    end)
    return controller
end
function Window:_buildPage(name, options, isCredits)
    options = options or {}
    local page = setmetatable({
        Window = self,
        Name = tostring(name or "page"),
        _searchItems = {},
        _isCredits = isCredits == true,
    }, Page)
    local order = isCredits and 100000 or tonumber(options.Order) or self._nextPageOrder
    if not isCredits and options.Order == nil then
        self._nextPageOrder += 1
    end

    page.Tab = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Surface3,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        LayoutOrder = order,
        Size = UDim2.new(1, 0, 0, 38),
        Font = Enum.Font.GothamBold,
        Text = "   " .. pageIcon(page.Name) .. "  " .. page.Name,
        TextColor3 = COLORS.Muted,
        TextSize = 12,
        TextTruncate = Enum.TextTruncate.AtEnd,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = self.TabHolder,
    }, {corner(8), padding(4, 8, 0, 0)})
    page.TabAccent = create("Frame", {
        AnchorPoint = Vector2.new(0, 0.5),
        BackgroundColor3 = COLORS.Accent,
        BorderSizePixel = 0,
        Position = UDim2.new(0, 5, 0.5, 0),
        Size = UDim2.fromOffset(3, 19),
        Visible = false,
        Parent = page.Tab,
    }, {corner(3)})

    page.Container = create("Frame", {
        BackgroundTransparency = 1,
        Size = UDim2.fromScale(1, 1),
        Visible = false,
        Parent = self.Content,
    })
    create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(2, 0),
        Size = UDim2.new(1, -4, 0, 38),
        Font = Enum.Font.GothamBold,
        Text = page.Name,
        TextColor3 = COLORS.Text,
        TextSize = 20,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = page.Container,
    })

    local scrollTop = 42
    if options.Search == true or options.SearchBox == true then
        scrollTop = 88
        local searchShell = create("Frame", {
            BackgroundColor3 = COLORS.Surface2,
            BorderSizePixel = 0,
            Position = UDim2.fromOffset(0, 42),
            Size = UDim2.new(1, 0, 0, 36),
            Parent = page.Container,
        }, {corner(9), stroke(COLORS.Stroke, 0.55, 1)})
        create("TextLabel", {
            BackgroundTransparency = 1,
            Position = UDim2.fromOffset(10, 0),
            Size = UDim2.fromOffset(20, 36),
            Font = Enum.Font.GothamBold,
            Text = ICONS.Search,
            TextColor3 = COLORS.Muted,
            TextSize = 18,
            Parent = searchShell,
        })
        page.SearchBox = create("TextBox", {
            BackgroundTransparency = 1,
            ClearTextOnFocus = false,
            Position = UDim2.fromOffset(34, 0),
            Size = UDim2.new(1, -72, 1, 0),
            Font = Enum.Font.Gotham,
            PlaceholderColor3 = COLORS.Muted,
            PlaceholderText = tostring(options.SearchPlaceholder or "search this page"),
            Text = "",
            TextColor3 = COLORS.Text,
            TextSize = 12,
            TextXAlignment = Enum.TextXAlignment.Left,
            Parent = searchShell,
        })
        local clear = create("TextButton", {
            AutoButtonColor = false,
            BackgroundTransparency = 1,
            Position = UDim2.new(1, -36, 0, 0),
            Size = UDim2.fromOffset(36, 36),
            Font = Enum.Font.GothamBold,
            Text = ICONS.Clear,
            TextColor3 = COLORS.Muted,
            TextSize = 20,
            Visible = false,
            Parent = searchShell,
        })
        self:_connect(page.SearchBox:GetPropertyChangedSignal("Text"), function()
            clear.Visible = page.SearchBox.Text ~= ""
            page:_filter(page.SearchBox.Text)
        end)
        self:_connect(page.SearchBox.FocusLost, function(enterPressed)
            -- Do not simulate Enter when focus is lost by tapping elsewhere.
            if enterPressed and type(options.OnSearch) == "function" then
                safeCallback(self, options.OnSearch, page.SearchBox.Text)
            end
        end)
        self:_connect(clear.Activated, function()
            page.SearchBox.Text = ""
            page.SearchBox:CaptureFocus()
        end)
    end

    page.Scroll = create("ScrollingFrame", {
        Active = true,
        AutomaticCanvasSize = Enum.AutomaticSize.Y,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        CanvasSize = UDim2.new(),
        ElasticBehavior = Enum.ElasticBehavior.Always,
        Position = UDim2.fromOffset(0, scrollTop),
        ScrollBarImageColor3 = COLORS.Accent,
        ScrollBarThickness = 3,
        ScrollingDirection = Enum.ScrollingDirection.Y,
        Size = UDim2.new(1, 0, 1, -scrollTop),
        Parent = page.Container,
    }, {
        create("UIListLayout", {
            Padding = UDim.new(0, 8),
            SortOrder = Enum.SortOrder.LayoutOrder,
        }),
        padding(0, 5, 0, 12),
    })

    -- Roblox handles touch momentum; this adds eased wheel movement for desktop.
    local wheelTarget = 0
    self:_connect(page.Scroll:GetPropertyChangedSignal("CanvasPosition"), function()
        if not page._wheelTweening then
            wheelTarget = page.Scroll.CanvasPosition.Y
        end
    end)
    self:_connect(UserInputService.InputChanged, function(input)
        if not page.Container.Visible
            or input.UserInputType ~= Enum.UserInputType.MouseWheel
            or not pointInside(page.Scroll, UserInputService:GetMouseLocation()) then
            return
        end
        local maxY = math.max(0, page.Scroll.AbsoluteCanvasSize.Y - page.Scroll.AbsoluteWindowSize.Y)
        wheelTarget = clamp(wheelTarget - (input.Position.Z * 52), 0, maxY)
        page._wheelTweening = true
        local wheelTween = tween(page.Scroll, 0.22, {CanvasPosition = Vector2.new(0, wheelTarget)})
        wheelTween.Completed:Once(function()
            page._wheelTweening = false
        end)
    end)

    self:_connect(page.Tab.Activated, function()
        self:SelectPage(page)
    end)
    table.insert(self.Pages, page)
    return page
end

function Window:CreatePage(name, options)
    local page = self:_buildPage(name, options, false)
    local index = tostring(self._nextPublicPageIndex)
    self._nextPublicPageIndex += 1
    self[index] = page

    -- Keep kredits last even though it is created with the window.
    if self.CreditsPage then
        self.CreditsPage.Tab.LayoutOrder = 100000
    end
    if not self._activePage or self._activePage == self.CreditsPage then
        self:SelectPage(page)
    end
    return page
end

local function buildWindow(options)
    options = options or {}
    local self = setmetatable({
        Pages = {},
        _connections = {},
        _cleanup = {},
        _toggles = {},
        _destroyed = false,
        _visible = true,
        _nextPageOrder = 1,
        _nextPublicPageIndex = 1,
    }, Window)

    self.ScreenGui = create("ScreenGui", {
        Name = "RRixhUI_" .. tostring(math.random(100000, 999999)),
        DisplayOrder = tonumber(options.DisplayOrder) or 999,
        IgnoreGuiInset = true,
        ResetOnSpawn = false,
        ZIndexBehavior = Enum.ZIndexBehavior.Sibling,
    })
    protectGui(self.ScreenGui)
    self.ScreenGui.Parent = getGuiParent()

    self.Main = create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = COLORS.Background,
        BorderSizePixel = 0,
        ClipsDescendants = true,
        Position = UDim2.fromScale(0.5, 0.5),
        Size = UDim2.fromOffset(720, 470),
        Parent = self.ScreenGui,
    }, {corner(18), stroke(COLORS.Stroke, 0.15, 1)})
    local header = create("Frame", {
        Active = true,
        BackgroundColor3 = COLORS.Surface,
        BorderSizePixel = 0,
        Size = UDim2.new(1, 0, 0, 56),
        Parent = self.Main,
    })
    create("Frame", {
        BackgroundColor3 = COLORS.Accent,
        BorderSizePixel = 0,
        Position = UDim2.new(0, 0, 1, -2),
        Size = UDim2.new(1, 0, 0, 2),
        Parent = header,
    }, {
        create("UIGradient", {
            Color = ColorSequence.new(COLORS.Accent, COLORS.Accent2),
        }),
    })
    self.TitleLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(18, 8),
        Size = UDim2.new(1, -112, 0, 23),
        Font = Enum.Font.GothamBold,
        Text = tostring(options.Title or "RRixh UI"),
        TextColor3 = COLORS.Text,
        TextSize = 16,
        TextTruncate = Enum.TextTruncate.AtEnd,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = header,
    })
    self.SubtitleLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(18, 30),
        Size = UDim2.new(1, -112, 0, 17),
        Font = Enum.Font.Gotham,
        Text = tostring(options.Subtitle or "mobile + pc"),
        TextColor3 = COLORS.Muted,
        TextSize = 10,
        TextTruncate = Enum.TextTruncate.AtEnd,
        TextXAlignment = Enum.TextXAlignment.Left,
        Parent = header,
    })
    self.VersionLabel = create("TextLabel", {
        BackgroundTransparency = 1,
        Position = UDim2.new(1, -250, 0, 19),
        Size = UDim2.fromOffset(150, 18),
        Font = Enum.Font.Code,
        Text = "Version: " .. RRixh.Version,
        TextColor3 = COLORS.Muted,
        TextSize = 10,
        TextXAlignment = Enum.TextXAlignment.Right,
        Parent = header,
    })
    local minimize = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -84, 0, 13),
        Size = UDim2.fromOffset(31, 31),
        Font = Enum.Font.GothamBold,
        Text = "",
        TextColor3 = COLORS.Muted,
        TextSize = 18,
        Parent = header,
    }, {corner(8)})
    local close = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Surface3,
        BorderSizePixel = 0,
        Position = UDim2.new(1, -44, 0, 13),
        Size = UDim2.fromOffset(31, 31),
        Font = Enum.Font.GothamBold,
        Text = "",
        TextColor3 = COLORS.Danger,
        TextSize = 19,
        Parent = header,
    }, {corner(8)})
    create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = COLORS.Muted,
        BorderSizePixel = 0,
        Position = UDim2.fromScale(0.5, 0.5),
        Size = UDim2.fromOffset(14, 2),
        Parent = minimize,
    }, {corner(2)})
    create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = COLORS.Danger,
        BorderSizePixel = 0,
        Position = UDim2.fromScale(0.5, 0.5),
        Rotation = 45,
        Size = UDim2.fromOffset(15, 2),
        Parent = close,
    }, {corner(2)})
    create("Frame", {
        AnchorPoint = Vector2.new(0.5, 0.5),
        BackgroundColor3 = COLORS.Danger,
        BorderSizePixel = 0,
        Position = UDim2.fromScale(0.5, 0.5),
        Rotation = -45,
        Size = UDim2.fromOffset(15, 2),
        Parent = close,
    }, {corner(2)})

    self.Sidebar = create("Frame", {
        BackgroundColor3 = COLORS.Surface,
        BorderSizePixel = 0,
        Position = UDim2.fromOffset(0, 56),
        Size = UDim2.new(0, 166, 1, -56),
        Parent = self.Main,
    })
    self.TabHolder = create("ScrollingFrame", {
        AutomaticCanvasSize = Enum.AutomaticSize.Y,
        BackgroundTransparency = 1,
        BorderSizePixel = 0,
        CanvasSize = UDim2.new(),
        Position = UDim2.fromOffset(10, 12),
        ScrollBarImageColor3 = COLORS.Accent,
        ScrollBarThickness = 2,
        Size = UDim2.new(1, -20, 1, -24),
        Parent = self.Sidebar,
    }, {
        create("UIListLayout", {
            Padding = UDim.new(0, 5),
            SortOrder = Enum.SortOrder.LayoutOrder,
        }),
    })
    self.Content = create("Frame", {
        BackgroundTransparency = 1,
        Position = UDim2.fromOffset(182, 68),
        Size = UDim2.new(1, -196, 1, -80),
        Parent = self.Main,
    })

    self.ToggleButton = create("TextButton", {
        AutoButtonColor = false,
        BackgroundColor3 = COLORS.Accent,
        BorderSizePixel = 0,
        Position = UDim2.fromOffset(18, 110),
        Size = UDim2.fromOffset(54, 54),
        Font = Enum.Font.SourceSansBold,
        Text = tostring(options.ToggleIcon or ICONS.Toggle),
        TextColor3 = Color3.new(1, 1, 1),
        TextSize = 27,
        ZIndex = 100,
        Parent = self.ScreenGui,
    }, {corner(16), stroke(Color3.new(1, 1, 1), 0.72, 1)})

    self.NotificationHolder = create("Frame", {
        AnchorPoint = Vector2.new(1, 1),
        BackgroundTransparency = 1,
        Position = UDim2.new(1, -14, 1, -14),
        Size = UDim2.fromOffset(310, 360),
        Parent = self.ScreenGui,
    }, {
        create("UIListLayout", {
            FillDirection = Enum.FillDirection.Vertical,
            HorizontalAlignment = Enum.HorizontalAlignment.Right,
            Padding = UDim.new(0, 8),
            SortOrder = Enum.SortOrder.LayoutOrder,
            VerticalAlignment = Enum.VerticalAlignment.Bottom,
        }),
    })

    local function updateResponsiveSize()
        if self._destroyed then
            return
        end
        local camera = workspace.CurrentCamera
        local viewport = camera and camera.ViewportSize or Vector2.new(1280, 720)
        local width = clamp(viewport.X - 24, 320, 720)
        local height = clamp(viewport.Y - 40, 350, 470)
        self.Main.Size = UDim2.fromOffset(width, height)

        local sideWidth = width < 520 and 126 or 166
        self.VersionLabel.Visible = true
        if width >= 520 then
            self.VersionLabel.Position = UDim2.new(1, -250, 0, 19)
            self.VersionLabel.Size = UDim2.fromOffset(150, 18)
            self.VersionLabel.TextSize = 10
            self.TitleLabel.Size = UDim2.new(1, -270, 0, 23)
            self.SubtitleLabel.Size = UDim2.new(1, -112, 0, 17)
        else
            self.VersionLabel.Position = UDim2.new(1, -96, 0, 32)
            self.VersionLabel.Size = UDim2.fromOffset(84, 14)
            self.VersionLabel.TextSize = 8
            self.TitleLabel.Size = UDim2.new(1, -112, 0, 23)
            self.SubtitleLabel.Size = UDim2.new(1, -116, 0, 17)
        end
        self.Sidebar.Size = UDim2.new(0, sideWidth, 1, -56)
        self.Content.Position = UDim2.fromOffset(sideWidth + 16, 68)
        self.Content.Size = UDim2.new(1, -(sideWidth + 30), 1, -80)
        self.NotificationHolder.Size = UDim2.fromOffset(math.min(310, viewport.X - 24), math.min(360, viewport.Y - 24))

        -- Leave an untouched window scale-kentered. After the user drags it,
        -- keep its offset position inside the resized viewport.
        if self.Main.AnchorPoint == Vector2.zero then
            local currentMain = self.Main.Position
            self.Main.Position = UDim2.fromOffset(
                clamp(currentMain.X.Offset, 6, math.max(6, viewport.X - width - 6)),
                clamp(currentMain.Y.Offset, 6, math.max(6, viewport.Y - height - 6))
            )
        end
        local current = self.ToggleButton.Position
        self.ToggleButton.Position = UDim2.fromOffset(
            clamp(current.X.Offset, 6, math.max(6, viewport.X - 60)),
            clamp(current.Y.Offset, 6, math.max(6, viewport.Y - 60))
        )
    end
    updateResponsiveSize()
    if workspace.CurrentCamera then
        self:_connect(workspace.CurrentCamera:GetPropertyChangedSignal("ViewportSize"), updateResponsiveSize)
    end

    makeDraggable(self, header, self.Main, {Threshold = 7})
    makeDraggable(self, self.ToggleButton, self.ToggleButton, {
        Threshold = 8,
        MaxTapTime = 0.6,
        OnTap = function()
            self:Toggle()
        end,
    })

    self:_connect(minimize.Activated, function()
        self:SetVisible(false)
    end)
    self:_connect(close.Activated, function()
        self:ConfirmDestroy()
    end)

    self.CreditsPage = self:_buildPage("kredits", {Search = false}, true)
    self.CreditsPage:Section("RRixh UI Library")
    self.CreditsPage:CreditsCard({
        UserId = 3001347724,
        Username = "lulaslollipop",
        JoinedDate = "October 23, 2021",
    })
    self:SelectPage(self.CreditsPage)

    return self
end

function RRixh:CreateWindow(options)
    local window = buildWindow(options)
    local index = tostring(#self.Windows + 1)
    while self.Windows[index] do
        index = tostring(tonumber(index) + 1)
    end
    self.Windows[index] = window
    self[index] = window
    window.Id = index
    return window
end

function RRixh:GetWindow(index)
    return self.Windows[tostring(index)]
end

function RRixh:DestroyAll()
    local copy = {}
    for _, window in pairs(self.Windows) do
        table.insert(copy, window)
    end
    for _, window in ipairs(copy) do
        window:Destroy(true)
    end
end

--// SIMPLE API 

local environment = _G
pcall(function()
    if type(getgenv) == "function" then
        environment = getgenv()
    end
end)

if environment.__RRIXH_SIMPLE_UI then
    pcall(function()
        environment.__RRIXH_SIMPLE_UI:Destroy(true)
    end)
end

local simpleWindow = RRixh:CreateWindow({
    Title = "RRixh UI",
    Subtitle = "mobile + pc",
    ToggleIcon = ICONS.Toggle,
    Credit = "rrixh",
})

local function buildESPSystem(window)
    local pageObject = window:_buildPage("ESP", {Search = true, Order = 90000}, false)
    local manager = {
        Page = pageObject,
        Records = {},
        NPCRecords = {},
        Specific = {},
        Config = {
            Highlight = false,
            NPCs = false,
            Skeleton = false,
            Minecraft = false,
            Username = false,
            Health = false,
            Arrow = false,
            Distance = false,
            Glow = false,
            Pointer = false,
            TeamColor = false,
            Rainbow = false,
            Tracer = false,
            HeadDot = false,
            Color = COLORS.Accent,
        },
    }
    local glowBloom = create("BloomEffect", {
        Enabled = false,
        Intensity = 1.2,
        Name = "RRixhESPGlow",
        Size = 30,
        Threshold = 0.72,
        Parent = Lighting,
    })

    local function screenLine(parent, thickness)
        return create("Frame", {
            AnchorPoint = Vector2.new(0.5, 0.5),
            BackgroundColor3 = COLORS.Accent,
            BorderSizePixel = 0,
            Size = UDim2.fromOffset(10, thickness or 2),
            Visible = false,
            ZIndex = 75,
            Parent = parent,
        }, {corner(2)})
    end

    local function setScreenLine(line, fromPoint, toPoint, thickness)
        if not line or not line.Parent or not fromPoint or not toPoint then
            return
        end
        local delta = toPoint - fromPoint
        local length = delta.Magnitude
        if length < 0.5 then
            line.Visible = false
            return
        end
        line.Visible = true
        line.Position = UDim2.fromOffset(
            (fromPoint.X + toPoint.X) * 0.5,
            (fromPoint.Y + toPoint.Y) * 0.5
        )
        line.Size = UDim2.fromOffset(length, thickness or 2)
        line.Rotation = math.deg(math.atan2(delta.Y, delta.X))
    end

    local function destroyList(list)
        for _, object in ipairs(list or {}) do
            pcall(function()
                object:Destroy()
            end)
        end
        table.clear(list or {})
    end

    local function newRecord(player)
        if player == LocalPlayer or manager.Records[player] then
            return manager.Records[player]
        end
        local overlay = create("Frame", {
            BackgroundTransparency = 1,
            Size = UDim2.fromScale(1, 1),
            ZIndex = 70,
            Parent = window.ScreenGui,
        })
        local box = create("Frame", {
            BackgroundTransparency = 1,
            BorderSizePixel = 0,
            Visible = false,
            ZIndex = 74,
            Parent = overlay,
        })
        local corners = {}
        for _ = 1, 8 do
            table.insert(corners, create("Frame", {
                BackgroundColor3 = COLORS.Accent,
                BorderSizePixel = 0,
                ZIndex = 75,
                Parent = box,
            }, {corner(2)}))
        end
        local healthBack = create("Frame", {
            BackgroundColor3 = Color3.fromRGB(10, 10, 12),
            BorderSizePixel = 0,
            Visible = false,
            ZIndex = 74,
            Parent = overlay,
        }, {corner(2)})
        local healthFill = create("Frame", {
            AnchorPoint = Vector2.new(0, 1),
            BackgroundColor3 = COLORS.Success,
            BorderSizePixel = 0,
            Position = UDim2.fromScale(0, 1),
            Size = UDim2.fromScale(1, 1),
            ZIndex = 75,
            Parent = healthBack,
        }, {corner(2)})
        local tracer = screenLine(overlay, 2)
        local edgeArrow = create("TextLabel", {
            AnchorPoint = Vector2.new(0.5, 0.5),
            BackgroundTransparency = 1,
            Font = Enum.Font.GothamBold,
            Size = UDim2.fromOffset(30, 30),
            Text = ICONS.UpTriangle,
            TextColor3 = COLORS.Accent,
            TextSize = 25,
            Visible = false,
            ZIndex = 78,
            Parent = overlay,
        })
        local skeletonLines = {}
        for _ = 1, 14 do
            table.insert(skeletonLines, screenLine(window.ScreenGui, 2))
        end
        local record = {
            Player = player,
            Overlay = overlay,
            Box = box,
            Corners = corners,
            HealthBack = healthBack,
            HealthFill = healthFill,
            Tracer = tracer,
            EdgeArrow = edgeArrow,
            SkeletonLines = skeletonLines,
            WorldInstances = {},
        }
        manager.Records[player] = record
        return record
    end

    local function setupCharacter(record, character)
        destroyList(record.WorldInstances)
        record.WorldInstances = {}
        record.Highlight = nil
        record.Info = nil
        record.Username = nil
        record.HealthText = nil
        record.DistanceText = nil
        record.Pointer = nil
        record.PointerText = nil
        record.HeadDot = nil
        record.HeadDotFrame = nil
        record.GlowLight = nil
        record.Character = character
        record.Root = character and character:FindFirstChild("HumanoidRootPart")
        record.Humanoid = character and character:FindFirstChildOfClass("Humanoid")
        if not character or not record.Root or not record.Humanoid then
            return
        end

        local highlight = create("Highlight", {
            Adornee = character,
            DepthMode = Enum.HighlightDepthMode.AlwaysOnTop,
            Enabled = false,
            FillColor = COLORS.Accent,
            FillTransparency = 0.65,
            Name = "RRixhHighlight",
            OutlineColor = COLORS.Accent,
            OutlineTransparency = 0,
            Parent = character,
        })
        table.insert(record.WorldInstances, highlight)
        record.Highlight = highlight

        local glowLight = create("PointLight", {
            Brightness = 0,
            Color = COLORS.Accent,
            Enabled = false,
            Range = 16,
            Shadows = false,
            Parent = record.Root,
        })
        table.insert(record.WorldInstances, glowLight)
        record.GlowLight = glowLight

        local info = create("BillboardGui", {
            Adornee = record.Root,
            AlwaysOnTop = true,
            Enabled = false,
            Name = "RRixhInfo",
            Size = UDim2.fromOffset(210, 62),
            StudsOffset = Vector3.new(0, -3.6, 0),
            Parent = window.ScreenGui,
        })
        local username = create("TextLabel", {
            BackgroundTransparency = 1,
            Font = Enum.Font.GothamBold,
            Size = UDim2.new(1, 0, 0, 18),
            Text = "@" .. record.Player.Name,
            TextColor3 = COLORS.Accent,
            TextSize = 12,
            TextStrokeTransparency = 0.35,
            Visible = false,
            Parent = info,
        })
        local health = create("TextLabel", {
            BackgroundTransparency = 1,
            Font = Enum.Font.GothamBold,
            Position = UDim2.fromOffset(0, 19),
            Size = UDim2.new(1, 0, 0, 18),
            Text = "100 HP",
            TextColor3 = COLORS.Success,
            TextSize = 11,
            TextStrokeTransparency = 0.35,
            Visible = false,
            Parent = info,
        })
        local distance = create("TextLabel", {
            BackgroundTransparency = 1,
            Font = Enum.Font.Gotham,
            Position = UDim2.fromOffset(0, 38),
            Size = UDim2.new(1, 0, 0, 18),
            Text = "0 studs",
            TextColor3 = COLORS.Text,
            TextSize = 10,
            TextStrokeTransparency = 0.35,
            Visible = false,
            Parent = info,
        })
        table.insert(record.WorldInstances, info)
        record.Info = info
        record.Username = username
        record.HealthText = health
        record.DistanceText = distance

        local pointer = create("BillboardGui", {
            Adornee = record.Root,
            AlwaysOnTop = true,
            Enabled = false,
            Name = "RRixhPointer",
            Size = UDim2.fromOffset(42, 42),
            StudsOffset = Vector3.new(0, 4.2, 0),
            Parent = window.ScreenGui,
        })
        local pointerText = create("TextLabel", {
            BackgroundTransparency = 1,
            Font = Enum.Font.GothamBold,
            Size = UDim2.fromScale(1, 1),
            Text = ICONS.DownTriangle,
            TextColor3 = COLORS.Accent,
            TextSize = 30,
            TextStrokeTransparency = 0.25,
            Parent = pointer,
        })
        table.insert(record.WorldInstances, pointer)
        record.Pointer = pointer
        record.PointerText = pointerText

        local head = character:FindFirstChild("Head")
        if head then
            local headDot = create("BillboardGui", {
                Adornee = head,
                AlwaysOnTop = true,
                Enabled = false,
                Name = "RRixhHeadDot",
                Size = UDim2.fromOffset(13, 13),
                StudsOffset = Vector3.new(0, 1.35, 0),
                Parent = window.ScreenGui,
            })
            local dot = create("Frame", {
                BackgroundColor3 = COLORS.Accent,
                BorderSizePixel = 0,
                Size = UDim2.fromScale(1, 1),
                Parent = headDot,
            }, {corner(20), stroke(Color3.new(1, 1, 1), 0.2, 1)})
            table.insert(record.WorldInstances, headDot)
            record.HeadDot = headDot
            record.HeadDotFrame = dot
        end

    end

    local function hideRecord(record)
        record.Box.Visible = false
        record.HealthBack.Visible = false
        record.Tracer.Visible = false
        record.EdgeArrow.Visible = false
        if record.Highlight then record.Highlight.Enabled = false end
        if record.GlowLight then record.GlowLight.Enabled = false end
        if record.Info then record.Info.Enabled = false end
        if record.Pointer then record.Pointer.Enabled = false end
        if record.HeadDot then record.HeadDot.Enabled = false end
        for _, line in ipairs(record.SkeletonLines or {}) do
            line.Visible = false
        end
    end

    local function destroyRecord(player)
        local record = manager.Records[player]
        if not record then
            return
        end
        destroyList(record.WorldInstances)
        destroyList(record.SkeletonLines)
        pcall(function() record.Overlay:Destroy() end)
        manager.Records[player] = nil
        manager.Specific[player] = nil
    end

    local function currentColor(player, rainbowColor)
        if manager.Config.TeamColor and player.Team then
            return player.TeamColor.Color
        end
        return manager.Config.Rainbow and rainbowColor or manager.Config.Color
    end

    local function positionCorners(record, width, height, color)
        local length = math.max(7, math.floor(math.min(width, height) * 0.24))
        local thickness = 2
        local lines = record.Corners
        local definitions = {
            {0, 0, length, thickness}, {0, 0, thickness, length},
            {width - length, 0, length, thickness}, {width - thickness, 0, thickness, length},
            {0, height - thickness, length, thickness}, {0, height - length, thickness, length},
            {width - length, height - thickness, length, thickness},
            {width - thickness, height - length, thickness, length},
        }
        for index, definition in ipairs(definitions) do
            local line = lines[index]
            line.BackgroundColor3 = color
            line.Position = UDim2.fromOffset(definition[1], definition[2])
            line.Size = UDim2.fromOffset(definition[3], definition[4])
        end
    end

    local function updateRecord(record, camera, viewport, rainbowColor)
        local player = record.Player
        local character = player.Character
        if record.Character ~= character
            or (character and (not record.Root or not record.Root.Parent)) then
            setupCharacter(record, character)
        end
        local specific = manager.Specific[player] == true
        local anyEnabled = specific
            or manager.Config.Highlight or manager.Config.Skeleton or manager.Config.Minecraft
            or manager.Config.Username or manager.Config.Health or manager.Config.Arrow
            or manager.Config.Distance or manager.Config.Glow or manager.Config.Pointer
            or manager.Config.Tracer or manager.Config.HeadDot
        if not anyEnabled or not record.Root or not record.Humanoid or record.Humanoid.Health <= 0 then
            hideRecord(record)
            return
        end

        local color = currentColor(player, rainbowColor)
        local screenPoint, onScreen = camera:WorldToViewportPoint(record.Root.Position)
        local inFront = screenPoint.Z > 0
        local distanceStuds = (camera.CFrame.Position - record.Root.Position).Magnitude
        local height = clamp(1900 / math.max(math.abs(screenPoint.Z), 1), 36, 285)
        local width = height * 0.56

        if record.Highlight then
            record.Highlight.Enabled = specific or manager.Config.Highlight or manager.Config.Glow
            record.Highlight.FillColor = color
            record.Highlight.OutlineColor = color
            record.Highlight.FillTransparency = manager.Config.Glow and 0.12 or 0.66
            record.Highlight.OutlineTransparency = manager.Config.Glow and 0 or 0.08
        end
        if record.GlowLight then
            record.GlowLight.Enabled = manager.Config.Glow
            record.GlowLight.Brightness = manager.Config.Glow and 2.5 or 0
            record.GlowLight.Color = color
        end
        if manager.Config.Skeleton then
            local links
            if character and character:FindFirstChild("UpperTorso") then
                links = {
                    {"Head", "UpperTorso"}, {"UpperTorso", "LowerTorso"},
                    {"UpperTorso", "LeftUpperArm"}, {"LeftUpperArm", "LeftLowerArm"},
                    {"LeftLowerArm", "LeftHand"}, {"UpperTorso", "RightUpperArm"},
                    {"RightUpperArm", "RightLowerArm"}, {"RightLowerArm", "RightHand"},
                    {"LowerTorso", "LeftUpperLeg"}, {"LeftUpperLeg", "LeftLowerLeg"},
                    {"LeftLowerLeg", "LeftFoot"}, {"LowerTorso", "RightUpperLeg"},
                    {"RightUpperLeg", "RightLowerLeg"}, {"RightLowerLeg", "RightFoot"},
                }
            else
                links = {
                    {"Head", "Torso"}, {"Torso", "Left Arm"}, {"Torso", "Right Arm"},
                    {"Torso", "Left Leg"}, {"Torso", "Right Leg"},
                }
            end
            for index, line in ipairs(record.SkeletonLines) do
                local link = links[index]
                if link then
                    local part0 = character:FindFirstChild(link[1])
                    local part1 = character:FindFirstChild(link[2])
                    if part0 and part1 then
                        local point0, visible0 = camera:WorldToViewportPoint(part0.Position)
                        local point1, visible1 = camera:WorldToViewportPoint(part1.Position)
                        if visible0 and visible1 and point0.Z > 0 and point1.Z > 0 then
                            line.BackgroundColor3 = color
                            setScreenLine(
                                line,
                                Vector2.new(point0.X, point0.Y),
                                Vector2.new(point1.X, point1.Y),
                                2
                            )
                        else
                            line.Visible = false
                        end
                    else
                        line.Visible = false
                    end
                else
                    line.Visible = false
                end
            end
        else
            for _, line in ipairs(record.SkeletonLines) do
                line.Visible = false
            end
        end

        if record.Info then
            record.Info.Enabled = specific or manager.Config.Username or manager.Config.Health or manager.Config.Distance
            record.Username.Visible = specific or manager.Config.Username
            record.Username.TextColor3 = color
            record.HealthText.Visible = manager.Config.Health
            record.HealthText.Text = tostring(math.max(0, math.floor(record.Humanoid.Health + 0.5))) .. " HP"
            record.DistanceText.Visible = specific or manager.Config.Distance
            record.DistanceText.Text = tostring(math.floor(distanceStuds + 0.5)) .. " studs"
        end
        if record.Pointer then
            record.Pointer.Enabled = manager.Config.Pointer
            record.PointerText.TextColor3 = color
        end
        if record.HeadDot then
            record.HeadDot.Enabled = manager.Config.HeadDot
            record.HeadDotFrame.BackgroundColor3 = color
        end

        record.Box.Visible = manager.Config.Minecraft and onScreen and inFront
        if record.Box.Visible then
            record.Box.Position = UDim2.fromOffset(screenPoint.X - width * 0.5, screenPoint.Y - height * 0.5)
            record.Box.Size = UDim2.fromOffset(width, height)
            positionCorners(record, width, height, color)
        end

        record.HealthBack.Visible = manager.Config.Health and onScreen and inFront
        if record.HealthBack.Visible then
            local ratio = clamp(record.Humanoid.Health / math.max(record.Humanoid.MaxHealth, 1), 0, 1)
            record.HealthBack.Position = UDim2.fromOffset(screenPoint.X - width * 0.5 - 8, screenPoint.Y - height * 0.5)
            record.HealthBack.Size = UDim2.fromOffset(4, height)
            record.HealthFill.Size = UDim2.fromScale(1, ratio)
            record.HealthFill.BackgroundColor3 = Color3.fromHSV(ratio * 0.33, 0.9, 1)
        end

        record.Tracer.Visible = manager.Config.Tracer and onScreen and inFront
        if record.Tracer.Visible then
            record.Tracer.BackgroundColor3 = color
            setScreenLine(
                record.Tracer,
                Vector2.new(viewport.X * 0.5, viewport.Y - 8),
                Vector2.new(screenPoint.X, screenPoint.Y + height * 0.5),
                2
            )
        end

        record.EdgeArrow.Visible = manager.Config.Arrow
        if record.EdgeArrow.Visible then
            local center = viewport * 0.5
            local relative = camera.CFrame:PointToObjectSpace(record.Root.Position)
            local delta
            if relative.Z > 0 then
                -- A target behind the camera belongs along the lower edge.
                -- Its local X still keeps left/right direction understandable.
                delta = Vector2.new(relative.X, math.max(math.abs(relative.Z) * 0.45, 1))
            else
                delta = Vector2.new(screenPoint.X, screenPoint.Y) - center
            end
            if delta.Magnitude < 0.001 then
                delta = Vector2.new(0, 1)
            end
            local direction = delta.Unit
            local scaleX = (viewport.X * 0.5 - 42) / math.max(math.abs(direction.X), 0.001)
            local scaleY = (viewport.Y * 0.5 - 42) / math.max(math.abs(direction.Y), 0.001)
            local arrowPosition = center + direction * math.min(scaleX, scaleY)
            record.EdgeArrow.Position = UDim2.fromOffset(arrowPosition.X, arrowPosition.Y)
            record.EdgeArrow.Rotation = math.deg(math.atan2(direction.Y, direction.X)) + 90
            record.EdgeArrow.TextColor3 = color
        end
    end

    function manager:SetSpecific(player, enabled)
        if player == LocalPlayer then
            return
        end
        self.Specific[player] = enabled == true or nil
        if enabled then
            newRecord(player)
        end
    end

    local function clearNPCs()
        for model, highlight in pairs(manager.NPCRecords) do
            pcall(function() highlight:Destroy() end)
            manager.NPCRecords[model] = nil
        end
    end

    local function refreshNPCs(color)
        if not manager.Config.NPCs then
            clearNPCs()
            return
        end
        for _, descendant in ipairs(workspace:GetDescendants()) do
            if descendant:IsA("Humanoid") then
                local model = descendant.Parent
                if model and model:IsA("Model") and not Players:GetPlayerFromCharacter(model)
                    and not manager.NPCRecords[model] then
                    manager.NPCRecords[model] = create("Highlight", {
                        Adornee = model,
                        DepthMode = Enum.HighlightDepthMode.AlwaysOnTop,
                        FillColor = color,
                        FillTransparency = 0.62,
                        Name = "RRixhNPCHighlight",
                        OutlineColor = color,
                        OutlineTransparency = 0,
                        Parent = model,
                    })
                end
            end
        end
        for model, highlight in pairs(manager.NPCRecords) do
            if not model.Parent or not highlight.Parent then
                manager.NPCRecords[model] = nil
            else
                highlight.FillColor = color
                highlight.OutlineColor = color
            end
        end
    end

    for _, player in ipairs(Players:GetPlayers()) do
        newRecord(player)
    end
    window:_connect(Players.PlayerAdded, newRecord)
    window:_connect(Players.PlayerRemoving, destroyRecord)

    local npcClock = 0
    window:_connect(RunService.RenderStepped, function(deltaTime)
        local camera = workspace.CurrentCamera
        if not camera then
            return
        end
        local rainbowColor = Color3.fromHSV((os.clock() * 0.16) % 1, 0.9, 1)
        glowBloom.Enabled = manager.Config.Glow
        for _, record in pairs(manager.Records) do
            updateRecord(record, camera, camera.ViewportSize, rainbowColor)
        end
        npcClock += deltaTime
        if npcClock >= 2 then
            npcClock = 0
            refreshNPCs(manager.Config.Rainbow and rainbowColor or manager.Config.Color)
        end
    end)

    window:_registerCleanup(function()
        pcall(function() glowBloom:Destroy() end)
        clearNPCs()
        local players = {}
        for player in pairs(manager.Records) do
            table.insert(players, player)
        end
        for _, player in ipairs(players) do
            destroyRecord(player)
        end
    end)

    pageObject:Section("ESP")
    pageObject:Toggle("highlight all players", false, function(value) manager.Config.Highlight = value end)
    pageObject:Toggle("include NPCs", false, function(value) manager.Config.NPCs = value; if not value then clearNPCs() end end)
    pageObject:ColorPicker("ESP highlight kolor", COLORS.Accent, function(value) manager.Config.Color = value end)
    pageObject:Toggle("rainbow mode", false, function(value) manager.Config.Rainbow = value end)
    pageObject:Toggle("teams ESP", false, function(value) manager.Config.TeamColor = value end)
    pageObject:Toggle("glowing ESP (bright)", false, function(value) manager.Config.Glow = value end)

    pageObject:Section("ESP TYPES")
    pageObject:Toggle("stickman ESP", false, function(value) manager.Config.Skeleton = value end)
    pageObject:Toggle("minecraft ESP", false, function(value) manager.Config.Minecraft = value end)
    pageObject:Toggle("usernames ESP", false, function(value) manager.Config.Username = value end)
    pageObject:Toggle("health bar ESP", false, function(value) manager.Config.Health = value end)
    pageObject:Toggle("directional arrows ESP", false, function(value) manager.Config.Arrow = value end)
    pageObject:Toggle("studs distance ESP", false, function(value) manager.Config.Distance = value end)
    pageObject:Toggle("pointing arrow", false, function(value) manager.Config.Pointer = value end)
    pageObject:Toggle("Tracer ESP", false, function(value) manager.Config.Tracer = value end)
    pageObject:Toggle("Head Dot ESP", false, function(value) manager.Config.HeadDot = value end)
    return manager
end

local ESPManager = buildESPSystem(simpleWindow)

local function buildPlayerSystem(window)
    local pageObject = window:_buildPage("player movement", {Search = true, Order = 91000}, false)
    local state = {
        TeleportWalk = false,
        TeleportSpeed = 0.1,
        BetterJump = false,
        BetterHeld = false,
        BetterButton = nil,
        OriginalJump = nil,
        OriginalJumpVisible = true,
    }

    local function humanoidAndRoot()
        local character = LocalPlayer and LocalPlayer.Character
        if not character then
            return nil, nil
        end
        return character:FindFirstChildOfClass("Humanoid"), character:FindFirstChild("HumanoidRootPart")
    end

    local function findOriginalJumpButton()
        local playerGui = LocalPlayer and LocalPlayer:FindFirstChildOfClass("PlayerGui")
        if not playerGui then
            return nil
        end
        local touchGui = playerGui:FindFirstChild("TouchGui")
        local controls = touchGui and touchGui:FindFirstChild("TouchControlFrame")
        return controls and controls:FindFirstChild("JumpButton")
    end

    local function performJump(boosted)
        local humanoid, root = humanoidAndRoot()
        if not humanoid or humanoid.Health <= 0 then
            return
        end
        humanoid.Jump = true
        humanoid:ChangeState(Enum.HumanoidStateType.Jumping)
        if boosted and root then
            local velocity = root.AssemblyLinearVelocity
            root.AssemblyLinearVelocity = Vector3.new(velocity.X, math.max(velocity.Y, 48), velocity.Z)
        end
    end

    local function ensureBetterButton()
        if state.BetterButton and state.BetterButton.Parent then
            return state.BetterButton
        end
        local buttonObject = create("TextButton", {
            AnchorPoint = Vector2.new(0.5, 0.5),
            AutoButtonColor = false,
            BackgroundColor3 = COLORS.Danger,
            BackgroundTransparency = 0.08,
            BorderSizePixel = 0,
            Position = UDim2.new(1, -82, 1, -94),
            Size = UDim2.fromOffset(72, 72),
            Text = "",
            Visible = false,
            ZIndex = 120,
            Parent = window.ScreenGui,
        }, {corner(36), stroke(Color3.new(1, 1, 1), 0.55, 2)})
        local shaft = create("Frame", {
            AnchorPoint = Vector2.new(0.5, 0.5),
            BackgroundColor3 = Color3.new(1, 1, 1),
            BorderSizePixel = 0,
            Position = UDim2.fromOffset(36, 39),
            Size = UDim2.fromOffset(4, 27),
            ZIndex = 121,
            Parent = buttonObject,
        }, {corner(3)})
        create("Frame", {
            AnchorPoint = Vector2.new(0.5, 0.5),
            BackgroundColor3 = Color3.new(1, 1, 1),
            BorderSizePixel = 0,
            Position = UDim2.fromOffset(28, 27),
            Rotation = -45,
            Size = UDim2.fromOffset(20, 4),
            ZIndex = 121,
            Parent = buttonObject,
        }, {corner(3)})
        create("Frame", {
            AnchorPoint = Vector2.new(0.5, 0.5),
            BackgroundColor3 = Color3.new(1, 1, 1),
            BorderSizePixel = 0,
            Position = UDim2.fromOffset(44, 27),
            Rotation = 45,
            Size = UDim2.fromOffset(20, 4),
            ZIndex = 121,
            Parent = buttonObject,
        }, {corner(3)})
        window:_connect(buttonObject.InputBegan, function(input)
            if input.UserInputType == Enum.UserInputType.Touch
                or input.UserInputType == Enum.UserInputType.MouseButton1 then
                state.BetterHeld = true
                tween(buttonObject, 0.1, {Size = UDim2.fromOffset(66, 66), BackgroundTransparency = 0})
                performJump(true)
            end
        end)
        window:_connect(buttonObject.InputEnded, function(input)
            if input.UserInputType == Enum.UserInputType.Touch
                or input.UserInputType == Enum.UserInputType.MouseButton1 then
                state.BetterHeld = false
                tween(buttonObject, 0.12, {Size = UDim2.fromOffset(72, 72), BackgroundTransparency = 0.08})
            end
        end)
        state.BetterButton = buttonObject
        return buttonObject
    end

    local function setBetterJump(enabled)
        state.BetterJump = enabled == true
        state.BetterHeld = false
        local customButton = ensureBetterButton()
        customButton.Visible = state.BetterJump
        local original = findOriginalJumpButton()
        if state.BetterJump then
            if original then
                state.OriginalJump = original
                state.OriginalJumpVisible = original.Visible
                original.Visible = false
            end
        elseif state.OriginalJump and state.OriginalJump.Parent then
            state.OriginalJump.Visible = state.OriginalJumpVisible
        end
    end

    pageObject:Section("movement")
    local humanoid = humanoidAndRoot()
    pageObject:Counter("walkspeed", 0, 600, humanoid and humanoid.WalkSpeed or 16, 1, function(value)
        local currentHumanoid = humanoidAndRoot()
        if currentHumanoid then
            currentHumanoid.WalkSpeed = value
        end
    end)
    pageObject:Counter("jump power", 0, 500, humanoid and humanoid.JumpPower or 50, 1, function(value)
        local currentHumanoid = humanoidAndRoot()
        if currentHumanoid then
            pcall(function() currentHumanoid.UseJumpPower = true end)
            currentHumanoid.JumpPower = value
        end
    end)
    pageObject:Counter("airwalk", -10, 100, humanoid and humanoid.HipHeight or 0, 0.1, function(value)
        local currentHumanoid = humanoidAndRoot()
        if currentHumanoid then
            currentHumanoid.HipHeight = value
        end
    end)
    pageObject:Counter("teleport walk speed", 0.1, 10, 0.1, 0.1, function(value)
        state.TeleportSpeed = value
    end)
    pageObject:Toggle("teleport walk", false, function(value)
        state.TeleportWalk = value
    end)

    pageObject:Section("jump")
    pageObject:Toggle("better jump button", false, setBetterJump)
    pageObject:Label("better jump", "replaces the roblox jump button with a red hold-to-fly jump button")

    window:_connect(UserInputService.InputEnded, function(input)
        if input.UserInputType == Enum.UserInputType.Touch
            or input.UserInputType == Enum.UserInputType.MouseButton1 then
            state.BetterHeld = false
            if state.BetterButton and state.BetterButton.Parent then
                tween(state.BetterButton, 0.12, {
                    Size = UDim2.fromOffset(72, 72),
                    BackgroundTransparency = 0.08,
                })
            end
        end
    end)
    window:_connect(RunService.RenderStepped, function()
        if state.TeleportWalk then
            local currentHumanoid, root = humanoidAndRoot()
            if currentHumanoid and root and currentHumanoid.Health > 0 then
                local direction = currentHumanoid.MoveDirection
                if direction.Magnitude > 0 then
                    root.CFrame = root.CFrame + (direction * state.TeleportSpeed)
                end
            end
        end
        if state.BetterJump and state.BetterHeld then
            performJump(true)
        end
        if state.BetterJump then
            local original = findOriginalJumpButton()
            if original and original.Visible then
                state.OriginalJump = original
                original.Visible = false
            end
        end
    end)

    window:_registerCleanup(function()
        state.TeleportWalk = false
        state.BetterJump = false
        state.BetterHeld = false
        if state.OriginalJump and state.OriginalJump.Parent then
            state.OriginalJump.Visible = state.OriginalJumpVisible
        end
        if state.BetterButton then
            state.BetterButton:Destroy()
            state.BetterButton = nil
        end
    end)
    return state
end

local PlayerSystem = buildPlayerSystem(simpleWindow)

local function buildPlayerTeleportSystem(window, espManager)
    local pageObject = window:_buildPage("player teleport", {Search = true, Order = 92000}, false)
    local state = {
        Entries = {},
        Spectating = nil,
        ActiveTween = nil,
    }

    local function characterInfo(player)
        local character = player and player.Character
        if not character then
            return nil, nil
        end
        return character:FindFirstChildOfClass("Humanoid"), character:FindFirstChild("HumanoidRootPart")
    end

    local function restoreCamera()
        local camera = workspace.CurrentCamera
        local humanoid = characterInfo(LocalPlayer)
        if camera and humanoid then
            camera.CameraType = Enum.CameraType.Custom
            camera.CameraSubject = humanoid
        end
    end

    local function setSpectating(player, enabled)
        if enabled then
            state.Spectating = player
        elseif state.Spectating == player then
            state.Spectating = nil
            restoreCamera()
        end
        for listedPlayer, entry in pairs(state.Entries) do
            local active = state.Spectating == listedPlayer
            entry.SpectateButton.Text = active and "stop spectating" or "spectate"
            entry.SpectateButton.BackgroundColor3 = active and COLORS.Danger or COLORS.Surface3
        end
    end

    local function smallButton(parent, text, order, color)
        local buttonObject = create("TextButton", {
            AutoButtonColor = false,
            BackgroundColor3 = color or COLORS.Surface3,
            BorderSizePixel = 0,
            LayoutOrder = order,
            Size = UDim2.new(0.25, -4, 1, 0),
            Font = Enum.Font.GothamBold,
            Text = text,
            TextColor3 = COLORS.Text,
            TextScaled = true,
            Parent = parent,
        }, {
            corner(7),
            create("UITextSizeConstraint", {MinTextSize = 6, MaxTextSize = 9}),
        })
        return buttonObject
    end

    local function removePlayer(player)
        local entry = state.Entries[player]
        if not entry then
            return
        end
        if state.Spectating == player then
            setSpectating(player, false)
        end
        espManager:SetSpecific(player, false)
        entry.Row:Destroy()
        state.Entries[player] = nil
    end

    local function addPlayer(player)
        if player == LocalPlayer or state.Entries[player] then
            return
        end
        local row = pageObject:_row(126, player.Name .. " " .. player.DisplayName)
        row.Name = "Player_" .. tostring(player.UserId)
        local avatarHolder = create("Frame", {
            BackgroundColor3 = COLORS.Surface3,
            BorderSizePixel = 0,
            ClipsDescendants = true,
            Position = UDim2.fromOffset(12, 10),
            Size = UDim2.fromOffset(56, 56),
            Parent = row,
        }, {corner(28), stroke(COLORS.Success, 0, 2)})
        local avatar = create("ImageLabel", {
            BackgroundTransparency = 1,
            BorderSizePixel = 0,
            Image = "",
            Position = UDim2.fromOffset(3, 3),
            ScaleType = Enum.ScaleType.Crop,
            Size = UDim2.new(1, -6, 1, -6),
            Parent = avatarHolder,
        }, {corner(25)})
        create("TextLabel", {
            BackgroundTransparency = 1,
            Position = UDim2.fromOffset(78, 8),
            Size = UDim2.new(1, -90, 0, 22),
            Font = Enum.Font.GothamBold,
            Text = player.DisplayName,
            TextColor3 = COLORS.Text,
            TextSize = 13,
            TextTruncate = Enum.TextTruncate.AtEnd,
            TextXAlignment = Enum.TextXAlignment.Left,
            Parent = row,
        })
        create("TextLabel", {
            BackgroundTransparency = 1,
            Position = UDim2.fromOffset(78, 30),
            Size = UDim2.new(1, -90, 0, 18),
            Font = Enum.Font.Gotham,
            Text = "@" .. player.Name,
            TextColor3 = COLORS.Success,
            TextSize = 10,
            TextTruncate = Enum.TextTruncate.AtEnd,
            TextXAlignment = Enum.TextXAlignment.Left,
            Parent = row,
        })
        local status = create("TextLabel", {
            BackgroundTransparency = 1,
            Position = UDim2.fromOffset(78, 49),
            Size = UDim2.new(1, -90, 0, 16),
            Font = Enum.Font.Gotham,
            Text = "loading character",
            TextColor3 = COLORS.Muted,
            TextSize = 9,
            TextXAlignment = Enum.TextXAlignment.Left,
            Parent = row,
        })
        local buttons = create("Frame", {
            BackgroundTransparency = 1,
            Position = UDim2.fromOffset(12, 78),
            Size = UDim2.new(1, -24, 0, 34),
            Parent = row,
        }, {
            create("UIListLayout", {
                FillDirection = Enum.FillDirection.Horizontal,
                Padding = UDim.new(0, 5),
                SortOrder = Enum.SortOrder.LayoutOrder,
            }),
        })
        buttons:SetAttribute("PlayerUserId", player.UserId)
        local teleportButton = smallButton(buttons, "teleport", 1, COLORS.Surface3)
        local tweenButton = smallButton(buttons, "tween teleport", 2, COLORS.Surface3)
        local spectateButton = smallButton(buttons, "spectate", 3, COLORS.Surface3)
        local espButton = smallButton(buttons, "esp", 4, COLORS.Surface3)
        local entry = {
            Player = player,
            Row = row,
            Avatar = avatar,
            Status = status,
            SpectateButton = spectateButton,
            ESPButton = espButton,
            ESPEnabled = false,
        }
        state.Entries[player] = entry

        local function updateCharacterStatus(character)
            local humanoid = character and character:FindFirstChildOfClass("Humanoid")
            status.Text = humanoid and humanoid.Health > 0 and "alive" or "respawning"
            status.TextColor3 = humanoid and humanoid.Health > 0 and COLORS.Success or COLORS.Muted
            if humanoid then
                window:_connect(humanoid.Died, function()
                    if row.Parent then
                        status.Text = "respawning"
                        status.TextColor3 = COLORS.Muted
                    end
                end)
            end
        end
        updateCharacterStatus(player.Character)
        window:_connect(player.CharacterAdded, function(character)
            task.spawn(function()
                pcall(function()
                    character:WaitForChild("Humanoid", 5)
                    character:WaitForChild("HumanoidRootPart", 5)
                end)
                if row.Parent then
                    updateCharacterStatus(character)
                end
            end)
        end)
        window:_connect(player.CharacterRemoving, function()
            if row.Parent then
                status.Text = "respawning"
                status.TextColor3 = COLORS.Muted
            end
        end)

        window:_connect(teleportButton.Activated, function()
            local _, localRoot = characterInfo(LocalPlayer)
            local targetHumanoid, targetRoot = characterInfo(player)
            if not localRoot or not targetRoot or not targetHumanoid or targetHumanoid.Health <= 0 then
                window:Notify("teleport", "that player does not have a living character right now", 3, "error")
                return
            end
            localRoot.CFrame = targetRoot.CFrame * CFrame.new(0, 0, 3)
        end)
        window:_connect(tweenButton.Activated, function()
            local _, localRoot = characterInfo(LocalPlayer)
            local targetHumanoid, targetRoot = characterInfo(player)
            if not localRoot or not targetRoot or not targetHumanoid or targetHumanoid.Health <= 0 then
                window:Notify("tween teleport", "that player does not have a living character right now", 3, "error")
                return
            end
            if state.ActiveTween then
                pcall(function() state.ActiveTween:Cancel() end)
            end
            local distance = (localRoot.Position - targetRoot.Position).Magnitude
            state.ActiveTween = tween(
                localRoot,
                clamp(distance / 70, 0.35, 3),
                {CFrame = targetRoot.CFrame * CFrame.new(0, 0, 3)},
                Enum.EasingStyle.Quad,
                Enum.EasingDirection.Out
            )
        end)
        window:_connect(spectateButton.Activated, function()
            setSpectating(player, state.Spectating ~= player)
        end)
        window:_connect(espButton.Activated, function()
            entry.ESPEnabled = not entry.ESPEnabled
            espManager:SetSpecific(player, entry.ESPEnabled)
            espButton.Text = entry.ESPEnabled and "esp on" or "esp"
            espButton.BackgroundColor3 = entry.ESPEnabled and COLORS.Accent or COLORS.Surface3
        end)

        task.spawn(function()
            local ok, image = pcall(
                Players.GetUserThumbnailAsync,
                Players,
                player.UserId,
                Enum.ThumbnailType.HeadShot,
                Enum.ThumbnailSize.Size150x150
            )
            if ok and row.Parent then
                avatar.Image = image
            end
        end)
    end

    pageObject:Section("server players")
    pageObject:Label("live player list", "player list automatically refresh as they leave/join")
    for _, player in ipairs(Players:GetPlayers()) do
        addPlayer(player)
    end
    window:_connect(Players.PlayerAdded, addPlayer)
    window:_connect(Players.PlayerRemoving, removePlayer)
    window:_connect(RunService.RenderStepped, function()
        local target = state.Spectating
        if not target or not target.Parent then
            return
        end
        local targetHumanoid = characterInfo(target)
        local camera = workspace.CurrentCamera
        if camera and targetHumanoid and targetHumanoid.Health > 0
            and camera.CameraSubject ~= targetHumanoid then
            camera.CameraType = Enum.CameraType.Custom
            camera.CameraSubject = targetHumanoid
        elseif camera and (not targetHumanoid or targetHumanoid.Health <= 0) then
            restoreCamera()
        end
    end)

    window:_registerCleanup(function()
        if state.ActiveTween then
            pcall(function() state.ActiveTween:Cancel() end)
        end
        state.Spectating = nil
        restoreCamera()
        for player in pairs(state.Entries) do
            espManager:SetSpecific(player, false)
        end
    end)
    return state
end

local PlayerTeleportSystem = buildPlayerTeleportSystem(simpleWindow, ESPManager)
local firstPage

local function isPage(value)
    return type(value) == "table"
        and value.Window == simpleWindow
        and value.Container ~= nil
        and value.Scroll ~= nil
end

local function getDefaultPage()
    if firstPage and firstPage.Container and firstPage.Container.Parent then
        return firstPage
    end
    firstPage = simpleWindow:CreatePage("home", {Search = false})
    return firstPage
end

local function newPage(name, searchBox)
    local options
    if type(searchBox) == "table" then
        options = searchBox
    else
        options = {Search = searchBox == true}
    end
    local createdPage = simpleWindow:CreatePage(name or "page", options)
    if not firstPage then
        firstPage = createdPage
        simpleWindow:SelectPage(createdPage)
    end
    return createdPage
end

local function simpleSection(pageArgument, textArgument)
    local targetPage, text
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
    end
    return targetPage:Section(text)
end

local function simpleLabel(pageArgument, textArgument)
    local targetPage, text
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
    end
    return targetPage:PlainLabel(text)
end

local function simpleButton(pageArgument, textArgument, callbackArgument)
    local targetPage, text, callback
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
        callback = callbackArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
        callback = textArgument
    end
    return targetPage:Button(text, callback)
end

local function simpleToggle(pageArgument, textArgument, callbackArgument)
    local targetPage, text, callback
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
        callback = callbackArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
        callback = textArgument
    end

    local generation = 0
    local controller
    controller = targetPage:Toggle(text, false, function(enabled)
        generation += 1
        local thisGeneration = generation
        if not enabled then
            return
        end

        task.spawn(function()
            while controller
                and controller:Get()
                and generation == thisGeneration
                and not simpleWindow._destroyed do
                local success = safeCallback(simpleWindow, callback)
                if not success then
                    if controller and controller:Get() then
                        controller:Set(false, true)
                    end
                    break
                end

                -- wait(1) inside the callback makes it loop about every second.
                -- With no wait it safely loops once per frame without freezing.
                task.wait()
            end
        end)
    end)
    return controller
end

local function simpleTextbox(pageArgument, textArgument, placeholderArgument, callbackArgument)
    local targetPage, text, placeholder, callback
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
        placeholder = placeholderArgument
        callback = callbackArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
        placeholder = textArgument
        callback = placeholderArgument
    end
    return targetPage:Textbox(text, placeholder, callback)
end

local function simpleCounter(pageArgument, textArgument, minimumArgument, maximumArgument, stepArgument, callbackArgument)
    local targetPage, text, minimum, maximum, step, callback
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
        minimum = minimumArgument
        maximum = maximumArgument
        step = stepArgument
        callback = callbackArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
        minimum = textArgument
        maximum = minimumArgument
        step = maximumArgument
        callback = stepArgument
    end
    return targetPage:Counter(text, minimum, maximum, minimum, step, callback)
end

local function simpleSlider(pageArgument, textArgument, minimumArgument, maximumArgument, callbackArgument)
    local targetPage, text, minimum, maximum, callback
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
        minimum = minimumArgument
        maximum = maximumArgument
        callback = callbackArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
        minimum = textArgument
        maximum = minimumArgument
        callback = maximumArgument
    end
    return targetPage:Slider(text, minimum, maximum, minimum, 1, callback)
end

local function simpleColorPicker(pageArgument, textArgument, defaultArgument, callbackArgument)
    local targetPage, text, defaultColor, callback
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
        defaultColor = defaultArgument
        callback = callbackArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
        defaultColor = textArgument
        callback = defaultArgument
    end
    return targetPage:ColorPicker(text, defaultColor, callback)
end

local function simpleDropdown(pageArgument, textArgument, optionsArgument, defaultArgument, callbackArgument)
    local targetPage, text, options, default, callback
    if isPage(pageArgument) or pageArgument == nil then
        targetPage = pageArgument or getDefaultPage()
        text = textArgument
        options = optionsArgument or {}
        default = defaultArgument
        callback = callbackArgument
    else
        targetPage = getDefaultPage()
        text = pageArgument
        options = textArgument or {}
        default = optionsArgument
        callback = defaultArgument
    end

    if type(default) == "number" then
        default = options[default]
    end
    if default == nil then
        default = options[1]
    end
    return targetPage:Dropdown(text, options, default, callback)
end

local function setTitle(title, subtitle)
    simpleWindow.TitleLabel.Text = tostring(title or "RRixh UI")
    if subtitle ~= nil then
        simpleWindow.SubtitleLabel.Text = tostring(subtitle)
    end
end

local function simpleNotify(title, text, duration, notificationType)
    return simpleWindow:Notify(title, text, duration, notificationType)
end

local function simpleDestroy(skipConfirmation)
    return simpleWindow:Destroy(skipConfirmation == true)
end

local simpleAPI = {
    page = newPage,
    section = simpleSection,
    label = simpleLabel,
    button = simpleButton,
    toggle = simpleToggle,
    textbox = simpleTextbox,
    kounter = simpleCounter,
    slider = simpleSlider,
    kolorpicker = simpleColorPicker,
    dropdown = simpleDropdown,
    uititle = setTitle,
    notify = simpleNotify,
    destroyui = simpleDestroy,
}

for name, apiFunction in pairs(simpleAPI) do
    environment[name] = apiFunction
end
environment.__RRIXH_SIMPLE_UI = simpleWindow

return simpleAPI;