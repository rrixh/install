local kode = {}

kode.Services = {
    TweenService = game:GetService("TweenService"),
    Players = game:GetService("Players"),
}
kode.Settings = {
    TPTime = 1,
    SafeWalkSpeed = 23.5,
}
kode.ActiveTween = nil

function kode.tp(x, y, z, seconds)
    local plr = kode.Services.Players.LocalPlayer
    local char = plr.Character or plr.CharacterAdded:Wait()
    local root = char:WaitForChild("HumanoidRootPart")
    local target
    local duration
    if typeof(x) == "Instance" then
        duration = tonumber(y) or kode.Settings.TPTime
        if x:IsA("BasePart") then
            target = x.CFrame
        elseif x:IsA("Model") then
            target = x:GetPivot()
        elseif x:IsA("Attachment") then
            target = x.WorldCFrame
        end
    elseif typeof(x) == "CFrame" then
        target = x
        duration = tonumber(y) or kode.Settings.TPTime
    elseif typeof(x) == "Vector3" then
        target = CFrame.new(x)
        duration = tonumber(y) or kode.Settings.TPTime
    elseif tonumber(x) and tonumber(y) and tonumber(z) then
        target = CFrame.new(tonumber(x), tonumber(y), tonumber(z))
        duration = tonumber(seconds) or kode.Settings.TPTime
    end
    if not target then return end
    duration = math.max(duration, 0)
    if kode.ActiveTween then
        kode.ActiveTween:Cancel()
        kode.ActiveTween = nil
    end
    if duration == 0 then
        root.CFrame = target
        return
    end
    kode.ActiveTween = kode.Services.TweenService:Create(
        root,
        TweenInfo.new(duration, Enum.EasingStyle.Linear),
        {CFrame = target}
    )
    kode.ActiveTween:Play()
    return kode.ActiveTween
end

function kode.StopTP()
    if kode.ActiveTween then
        kode.ActiveTween:Cancel()
        kode.ActiveTween = nil
    end
end

function kode.SetDefaultTPTime(seconds)
    seconds = tonumber(seconds)
    if seconds and seconds >= 0 then
        kode.Settings.TPTime = seconds
    end
end

do
local Services = {
    Players = game:GetService("Players"),
    RunService = game:GetService("RunService"),
    Workspace = game:GetService("Workspace"),
    UserInputService = game:GetService("UserInputService"),
}
local LocalPlayer = Services.Players.LocalPlayer
local NAmanage, NAStuff, NAlib, opt = {}, {SafeSpeedMethod = true}, {}, {}
local _na_env = {}
local InstanceNew = Instance.new
local connections = {}
local customVECTORMOVE, thumberSTICKER, sussyINPUTTER
local GetCustomMoveVector
local FLYING = false
local function getHum()
    local char = LocalPlayer.Character
    return char and char:FindFirstChildOfClass("Humanoid")
end
local function getRoot(char)
    return char and (char:FindFirstChild("HumanoidRootPart")
        or char:FindFirstChild("Torso") or char:FindFirstChild("UpperTorso"))
end
function NAlib.disconnect(key)
    local connection = connections[key]
    if connection then connection:Disconnect() end
    connections[key] = nil
end
function NAlib.connect(key, connection)
    NAlib.disconnect(key)
    connections[key] = connection
    return connection
end
function NAlib.isConnected(key)
    return connections[key] and connections[key].Connected
end
function NAlib.isProperty(inst, prop)
    local ok, value = pcall(function() return inst[prop] end)
    if ok then return value end
end
function NAlib.setProperty(inst, prop, value)
    local ok, current = pcall(function() return inst[prop] end)
    if ok and current == value then return true end
    return pcall(function() inst[prop] = value end)
end
NAmanage.isAnyNAInputActive = function()
    return Services.UserInputService:GetFocusedTextBox() ~= nil
end
-- Local equivalents of NA helper bookkeeping.
local helperAttribute = "RRixhLoopWSHelper"
NAmanage.ESP_GetSecureAttrKey = function() return helperAttribute end
NAmanage.GetAttr = function(inst, key) return inst:GetAttribute(key) end
NAmanage.SetAttr = function(inst, key, value) inst:SetAttribute(key, value) end
local NAgui = {
    rStringgg = function()
        return game:GetService("HttpService"):GenerateGUID(false)
    end,
}

NAmanage.GetControlModule = NAmanage.GetControlModule or function()
	if opt.ctrlModule and type(opt.ctrlModule.GetMoveVector) == "function" then
		return opt.ctrlModule
	end
	local lp = LocalPlayer or (Services.Players and Services.Players.LocalPlayer)
	if not lp then
		return nil
	end
	local ps = lp:FindFirstChildOfClass("PlayerScripts") or lp:FindFirstChild("PlayerScripts")
	if not ps then
		return nil
	end
	local pm = ps:FindFirstChild("PlayerModule")
	if not pm then
		return nil
	end
	local cm = pm:FindFirstChild("ControlModule")
	if not cm then
		return nil
	end
	local ok, result = pcall(require, cm)
	if ok and result and type(result.GetMoveVector) == "function" then
		opt.ctrlModule = result
		return result
	end
	return nil
end


customVECTORMOVE = Vector3.zero
thumberSTICKER = Vector2.zero

sussyINPUTTER = {
	W = false,
	A = false,
	S = false,
	D = false,
}

NAmanage.setMoveKeyState=function(keyCode, isDown)
	if keyCode == Enum.KeyCode.W then
		if sussyINPUTTER.W == isDown then return false end
		sussyINPUTTER.W = isDown
		return true
	end
	if keyCode == Enum.KeyCode.S then
		if sussyINPUTTER.S == isDown then return false end
		sussyINPUTTER.S = isDown
		return true
	end
	if keyCode == Enum.KeyCode.A then
		if sussyINPUTTER.A == isDown then return false end
		sussyINPUTTER.A = isDown
		return true
	end
	if keyCode == Enum.KeyCode.D then
		if sussyINPUTTER.D == isDown then return false end
		sussyINPUTTER.D = isDown
		return true
	end
	return false
end

NAmanage.updateInputVector=function()
	local x, z = 0, 0
	if sussyINPUTTER.W then z = z + 1 end
	if sussyINPUTTER.S then z = z - 1 end
	if sussyINPUTTER.A then x = x - 1 end
	if sussyINPUTTER.D then x = x + 1 end

	NAStuff._moveInputKeyboardVector = Vector3.new(x, 0, z)
	if thumberSTICKER.Magnitude > 0.1 then
		customVECTORMOVE = Vector3.new(thumberSTICKER.X, 0, thumberSTICKER.Y)
	else
		customVECTORMOVE = NAStuff._moveInputKeyboardVector
	end

	if customVECTORMOVE.Magnitude > 1 then
		customVECTORMOVE = customVECTORMOVE.Unit
	end
	NAStuff._moveInputLastUpdate = os.clock()
	NAStuff._moveInputKeyboardActive = x ~= 0 or z ~= 0
end


function GetCustomMoveVector(useHumanoidFallback)
	local function normalizeMoveVec(vec, invertYToZ)
		local vecType = typeof(vec)
		if vecType == "Vector3" then
			return vec
		end
		if vecType == "Vector2" then
			return Vector3.new(vec.X, 0, (invertYToZ and -vec.Y or vec.Y))
		end
		if type(vec) == "table" then
			local x = tonumber(vec.X or vec.x or vec[1]) or 0
			local y = tonumber(vec.Y or vec.y or vec[2]) or 0
			local z = tonumber(vec.Z or vec.z or vec[3])
			if z ~= nil then
				return Vector3.new(x, y, z)
			end
			return Vector3.new(x, 0, (invertYToZ and -y or y))
		end
		return nil
	end

	local function getHumanoidMoveDirection()
		local hum = getHum and getHum() or nil
		if not hum then
			return nil
		end
		return normalizeMoveVec(NAlib.isProperty(hum, "MoveDirection"), false)
	end

	local function isControlVectorCameraRelative(ctrl)
		local activeController
		if ctrl and type(ctrl.GetActiveController) == "function" then
			pcall(function()
				activeController = ctrl:GetActiveController()
			end)
		elseif type(ctrl) == "table" then
			activeController = rawget(ctrl, "activeController")
		end

		local source = activeController or ctrl
		if source and type(source.IsMoveVectorCameraRelative) == "function" then
			local ok, relative = pcall(function()
				return source:IsMoveVectorCameraRelative()
			end)
			if ok and type(relative) == "boolean" then
				return relative
			end
		end

		if type(source) == "table" then
			local relative = rawget(source, "moveVectorIsCameraRelative")
			if type(relative) == "boolean" then
				return relative
			end
		end

		return true
	end

	local ctrl = NAmanage.GetControlModule and NAmanage.GetControlModule() or opt.ctrlModule
	if ctrl and type(ctrl.GetMoveVector) == "function" then
		local ok, vec = pcall(function()
			return ctrl:GetMoveVector()
		end)
		if ok then
			local normalized = normalizeMoveVec(vec, true)
			if normalized and normalized.Magnitude > 1 then
				normalized = normalized.Unit
			end
			if normalized and normalized.Magnitude > 0 then
				return normalized, isControlVectorCameraRelative(ctrl)
			end
		end
	end

	local keyboardSource = normalizeMoveVec(NAStuff._moveInputKeyboardVector, false) or Vector3.zero
	local keyboardFallback = Vector3.new(keyboardSource.X, keyboardSource.Y, -keyboardSource.Z)
	if keyboardFallback.Magnitude > 0 then
		return keyboardFallback, true
	end

	local fallbackSource = normalizeMoveVec(customVECTORMOVE, false) or Vector3.zero
	local fallback = Vector3.new(fallbackSource.X, fallbackSource.Y, -fallbackSource.Z)
	if fallback.Magnitude > 0 then
		return fallback, true
	end

	if useHumanoidFallback == false then
		return Vector3.zero, true
	end

	local humanoidMove = getHumanoidMoveDirection()
	if humanoidMove and humanoidMove.Magnitude > 0 then
		if humanoidMove.Magnitude > 1 then
			humanoidMove = humanoidMove.Unit
		end
		return humanoidMove, false
	end

	return Vector3.zero, true
end

local function startInput()
if NAStuff._moveInputBegan then
	NAStuff._moveInputBegan:Disconnect()
	NAStuff._moveInputBegan = nil
end
if NAStuff._moveInputEnded then
	NAStuff._moveInputEnded:Disconnect()
	NAStuff._moveInputEnded = nil
end

NAStuff._moveInputBegan = Services.UserInputService.InputBegan:Connect(function(input, gameProcessed)
	if gameProcessed or (NAmanage.isAnyNAInputActive and NAmanage.isAnyNAInputActive()) then return end
	if not input or input.UserInputType ~= Enum.UserInputType.Keyboard then
		return
	end
	if NAmanage.setMoveKeyState(input.KeyCode, true) then
		NAmanage.updateInputVector()
	end
end)

NAStuff._moveInputEnded = Services.UserInputService.InputEnded:Connect(function(input)
	if NAmanage.isAnyNAInputActive and NAmanage.isAnyNAInputActive() then return end
	if not input or input.UserInputType ~= Enum.UserInputType.Keyboard then
		return
	end
	if NAmanage.setMoveKeyState(input.KeyCode, false) then
		NAmanage.updateInputVector()
	end
end)

end
NAmanage.ESP_HardenVisual = function(inst)
	if typeof(inst) ~= "Instance" then
		return
	end
	pcall(function()
		inst.Archivable = false
	end)
	local secureAttrKey = NAmanage.ESP_GetSecureAttrKey()
	if NAmanage.GetAttr(inst, secureAttrKey) ~= true then
		NAmanage.SetAttr(inst, secureAttrKey, true)
		pcall(function()
			inst.Name = (NAgui.rStringgg and NAgui.rStringgg()) or "\0"
		end)
	end
	local hiddenSetter = (opt and opt.hiddenprop) or hiddenprop or sethiddenproperty or set_hidden_property or set_hidden_prop
	if hiddenSetter then
		pcall(function()
			hiddenSetter(inst, "RobloxLocked", true)
		end)
	end
end


NAmanage.Helper_GetSecureHost = function()
	return Services.Workspace
end

NAmanage.Helper_EnsureSecureContainer = function()
	local host = NAmanage.Helper_GetSecureHost()
	if not host then
		return nil
	end
	local container = NAStuff.Helper_SecureContainer
	if container and not container.Parent then
		NAStuff.Helper_SecureContainer = nil
		container = nil
	end
	if not container then
		container = InstanceNew("Folder")
		NAStuff.Helper_SecureContainer = container
	end
	NAmanage.ESP_HardenVisual(container)
	if container.Parent ~= host then
		pcall(function()
			container.Parent = host
		end)
	end
	return container
end

NAmanage.Helper_StoreInstance = function(inst)
	if typeof(inst) ~= "Instance" then
		return nil
	end
	local container = NAmanage.Helper_EnsureSecureContainer()
	if not container then
		return nil
	end
	NAmanage.ESP_HardenVisual(inst)
	if inst.Parent ~= container then
		pcall(function()
			inst.Parent = container
		end)
	end
	return container
end
NAmanage.configureFlyHelper=function(part)
	if not part then return end
	part.Size = Vector3.new(0.05, 0.05, 0.05)
	part.Transparency = 1
	part.CanCollide = false
	pcall(function() part.CanTouch = false end)
	pcall(function() part.CanQuery = false end)
	pcall(function() part.Massless = true end)
	NAmanage.Helper_StoreInstance(part)
end

NAmanage.GetVelocityWalkSpeedValue = function()
	return tonumber(_na_env.NamelessSpeed)
end

NAmanage.IsCharacterFullyNoClip = function(char)
	if typeof(char) ~= "Instance" then
		return false
	end
	local parts = 0
	for _, part in char:QueryDescendants("BasePart") do
		parts += 1
		if NAlib.isProperty(part, "CanCollide") ~= false then
			return false
		end
	end
	return parts > 0
end

NAmanage.GetVelocityWalkSpeedMoveDirection = function(root, hum)
	local moveVec = Vector3.zero
	local inputUpdatedAt = tonumber(NAStuff._moveInputLastUpdate)
	local recentlyChangedInput = inputUpdatedAt and os.clock() - inputUpdatedAt <= 0.18
	if typeof(GetCustomMoveVector) == "function" then
		moveVec = GetCustomMoveVector(false)
	end
	local flatMoveVec = typeof(moveVec) == "Vector3" and Vector3.new(moveVec.X, 0, moveVec.Z) or Vector3.zero
	if flatMoveVec.Magnitude <= 0.05 and NAStuff._moveInputKeyboardActive ~= true and recentlyChangedInput then
		return Vector3.zero
	end
	if typeof(moveVec) == "Vector3" then
		local flatInput = flatMoveVec
		if flatInput.Magnitude > 0.05 then
			local basisCF = Services.Workspace.CurrentCamera and Services.Workspace.CurrentCamera.CFrame or (root and root.CFrame)
			if basisCF then
				local right = Vector3.new(basisCF.RightVector.X, 0, basisCF.RightVector.Z)
				local look = Vector3.new(basisCF.LookVector.X, 0, basisCF.LookVector.Z)
				if look.Magnitude <= 0.05 and root then
					look = Vector3.new(root.CFrame.LookVector.X, 0, root.CFrame.LookVector.Z)
					right = Vector3.new(root.CFrame.RightVector.X, 0, root.CFrame.RightVector.Z)
				end
				local desired = Vector3.zero
				if right.Magnitude > 0.05 then
					desired += right.Unit * flatInput.X
				end
				if look.Magnitude > 0.05 then
					desired += look.Unit * -flatInput.Z
				end
				if desired.Magnitude > 0.05 then
					return desired.Unit
				end
			end
		end
	end
	if hum then
		local humMove = NAlib.isProperty(hum, "MoveDirection")
		if typeof(humMove) == "Vector3" then
			local flatHum = Vector3.new(humMove.X, 0, humMove.Z)
			if flatHum.Magnitude > 0.05 then
				return flatHum.Unit
			end
		end
	end
	return Vector3.zero
end

NAmanage.GetVelocityWalkSpeedState = function()
	NAStuff.velocityWalkSpeed = NAStuff.velocityWalkSpeed or {}
	return NAStuff.velocityWalkSpeed
end

NAmanage.ClearVelocityWalkSpeedClampState = function()
	local state = NAmanage.GetVelocityWalkSpeedState()
	state.clampRoot = nil
	state.clampHum = nil
	state.clampAxes = nil
	state.clampPlanarDirection = nil
end

NAmanage.SetVelocityWalkSpeedClampState = function(root, hum, axes, planarDirection)
	local state = NAmanage.GetVelocityWalkSpeedState()
	state.clampRoot = root
	state.clampHum = hum
	state.clampAxes = axes
	if typeof(planarDirection) == "Vector3" then
		local flatDir = Vector3.new(planarDirection.X, 0, planarDirection.Z)
		state.clampPlanarDirection = flatDir.Magnitude > 0.05 and flatDir.Unit or nil
	else
		state.clampPlanarDirection = nil
	end
end

NAmanage.ClampVelocityWalkSpeedVector = function(velocity, cap, axes, planarDirection)
	if typeof(velocity) ~= "Vector3" or not cap or cap < 0 or typeof(axes) ~= "Vector3" then
		return velocity
	end
	local newVelocity = velocity
	local useX = math.abs(axes.X) > 0.05
	local useY = math.abs(axes.Y) > 0.05
	local useZ = math.abs(axes.Z) > 0.05
	if planarDirection and (useX or useZ) then
		local flatVelocity = Vector3.new(newVelocity.X, 0, newVelocity.Z)
		if flatVelocity.Magnitude > 0 then
			local alignedSpeed = math.clamp(flatVelocity:Dot(planarDirection), -cap, cap)
			local alignedVelocity = planarDirection * alignedSpeed
			newVelocity = Vector3.new(alignedVelocity.X, newVelocity.Y, alignedVelocity.Z)
		end
	end
	local cappedPart = Vector3.new(useX and newVelocity.X or 0, useY and newVelocity.Y or 0, useZ and newVelocity.Z or 0)
	local speed = cappedPart.Magnitude
	if speed > cap then
		local capped = speed > 0 and cappedPart.Unit * cap or Vector3.zero
		newVelocity = Vector3.new(useX and capped.X or newVelocity.X, useY and capped.Y or newVelocity.Y, useZ and capped.Z or newVelocity.Z)
	end
	return newVelocity
end

NAmanage.ClampVelocityWalkSpeedRoot = function()
	local state = NAmanage.GetVelocityWalkSpeedState()
	local root = state.clampRoot
	local hum = state.clampHum
	local axes = state.clampAxes
	local planarDirection = state.clampPlanarDirection
	if not root or not hum or not axes or not root.Parent or not hum.Parent then
		return
	end
	local cap = tonumber(NAlib.isProperty(hum, "WalkSpeed"))
	if not cap or cap < 0 then
		return
	end
	local velocity = NAlib.isProperty(root, "AssemblyLinearVelocity") or root.Velocity
	if typeof(velocity) ~= "Vector3" then
		return
	end
	local newVelocity = NAmanage.ClampVelocityWalkSpeedVector(velocity, cap, axes, planarDirection)
	if newVelocity ~= velocity then
		if not NAlib.setProperty(root, "AssemblyLinearVelocity", newVelocity) then
			root.Velocity = newVelocity
		end
	end
end

NAmanage.EnsureVelocityWalkSpeedClampLoop = function()
	if NAlib.isConnected("na_velocityws_cap") then
		return
	end
	local clampSignal = Services.RunService.Heartbeat
	NAlib.connect("na_velocityws_cap", clampSignal:Connect(function()
		NAmanage.ClampVelocityWalkSpeedRoot()
	end))
end

NAmanage.DestroyVelocityWalkSpeedHelper = function()
	local state = NAmanage.GetVelocityWalkSpeedState()
	NAmanage.ClearVelocityWalkSpeedClampState()
	if state.bv then
		pcall(function()
			state.bv:Destroy()
		end)
	end
	if state.weld then
		pcall(function()
			state.weld:Destroy()
		end)
	end
	if state.part then
		pcall(function()
			state.part:Destroy()
		end)
	end
	state.bv = nil
	state.weld = nil
	state.part = nil
	state.lastPlanarDriveRoot = nil
	state.lastPlanarDriveSpeed = nil
	state.lastPlanarDriveTime = nil
	state.planarBrakeRoot = nil
	state.planarBrakeDriveTime = nil
	state.planarBrakeUntil = nil
end

NAmanage.GetVelocityWalkSpeedAssemblyMass = function(root)
	local mass = tonumber(root and root.AssemblyMass) or 0
	if mass > 0 then
		return mass
	end
	local char = root and root.Parent
	if typeof(char) ~= "Instance" then
		return 1
	end
	local total = 0
	for _, part in char:QueryDescendants("BasePart") do
		local ok, partMass = pcall(function()
			return part:GetMass()
		end)
		if ok and tonumber(partMass) then
			total += partMass
		end
	end
	return math.max(total, 1)
end

NAmanage.GetVelocityWalkSpeedForce = function(root, velocity)
	local mass = math.max(NAmanage.GetVelocityWalkSpeedAssemblyMass(root), 1)
	local flatSpeed = typeof(velocity) == "Vector3" and Vector3.new(velocity.X, 0, velocity.Z).Magnitude or 0
	local verticalSpeed = typeof(velocity) == "Vector3" and math.abs(velocity.Y) or 0
	local forceCap = 9e9
	local planarForce = math.clamp(mass * (12000 + flatSpeed * 950), 25000, forceCap)
	local verticalForce = math.clamp(mass * (14000 + verticalSpeed * 1100), 30000, forceCap)
	return flatSpeed, verticalSpeed, planarForce, verticalForce
end

NAmanage.SetVelocityWalkSpeedHelperActive = function(velocity, enabled, root)
	local state = NAmanage.GetVelocityWalkSpeedState()
	local bv = state.bv
	if not bv or bv.Parent == nil then
		return
	end
	pcall(function()
		bv.Velocity = velocity or Vector3.zero
		if enabled and root then
			local flatSpeed, verticalSpeed, planarForce, verticalForce = NAmanage.GetVelocityWalkSpeedForce(root, velocity)
			bv.MaxForce = Vector3.new(
				flatSpeed > 0.05 and planarForce or 0,
				verticalSpeed > 0.05 and verticalForce or 0,
				flatSpeed > 0.05 and planarForce or 0
			)
		else
			bv.MaxForce = Vector3.zero
		end
	end)
end

NAmanage.RebuildVelocityWalkSpeedHelper = function()
	local speed = NAmanage.GetVelocityWalkSpeedValue()
	if NAStuff.SafeSpeedMethod == false or not speed or speed <= 0 then
		return
	end
	NAmanage.DestroyVelocityWalkSpeedHelper()
	NAmanage.RefreshVelocityWalkSpeed()
end

NAmanage.MarkVelocityWalkSpeedPlanarDrive = function(root, velocity)
	if not root or typeof(velocity) ~= "Vector3" then
		return
	end
	local flatVelocity = Vector3.new(velocity.X, 0, velocity.Z)
	if flatVelocity.Magnitude <= 0.05 then
		return
	end
	local state = NAmanage.GetVelocityWalkSpeedState()
	state.lastPlanarDriveRoot = root
	state.lastPlanarDriveSpeed = flatVelocity.Magnitude
	state.lastPlanarDriveTime = os.clock()
end

NAmanage.BrakeVelocityWalkSpeedPlanarDrift = function(root, hum)
	if not root or not root.Parent then
		return
	end
	local state = NAmanage.GetVelocityWalkSpeedState()
	local lastTime = tonumber(state.lastPlanarDriveTime)
	if state.lastPlanarDriveRoot ~= root or not lastTime then
		return
	end
	local clockNow = os.clock()
	if clockNow - lastTime > 0.35 then
		return
	end
	if state.planarBrakeRoot ~= root or state.planarBrakeDriveTime ~= lastTime then
		state.planarBrakeRoot = root
		state.planarBrakeDriveTime = lastTime
		state.planarBrakeUntil = clockNow + 0.16
	end
	if clockNow > (tonumber(state.planarBrakeUntil) or 0) then
		state.planarBrakeRoot = nil
		state.planarBrakeDriveTime = nil
		state.planarBrakeUntil = nil
		return
	end
	local floorMaterial = hum and NAlib.isProperty(hum, "FloorMaterial")
	if floorMaterial == Enum.Material.Air then
		return
	end
	local velocity = NAlib.isProperty(root, "AssemblyLinearVelocity") or root.Velocity
	if typeof(velocity) ~= "Vector3" then
		return
	end
	local flatSpeed = Vector3.new(velocity.X, 0, velocity.Z).Magnitude
	if flatSpeed <= 0.05 then
		return
	end
	local expectedSpeed = tonumber(hum and NAlib.isProperty(hum, "WalkSpeed")) or 0
	if expectedSpeed < 0 then
		expectedSpeed = 0
	end
	local newVelocity = Vector3.new(0, velocity.Y, 0)
	if flatSpeed > expectedSpeed then
		local flatVelocity = Vector3.new(velocity.X, 0, velocity.Z)
		local cappedVelocity = flatVelocity.Magnitude > 0 and flatVelocity.Unit * expectedSpeed or Vector3.zero
		newVelocity = Vector3.new(cappedVelocity.X, velocity.Y, cappedVelocity.Z)
		state.planarBrakeRoot = nil
		state.planarBrakeDriveTime = nil
		state.planarBrakeUntil = nil
	end
	if not NAlib.setProperty(root, "AssemblyLinearVelocity", newVelocity) then
		root.Velocity = newVelocity
	end
end

NAmanage.GetVelocityWalkSpeedWallAdjustedVelocity = function(root, desiredVelocity, ignoreList)
	if not root or not root.Parent or typeof(desiredVelocity) ~= "Vector3" or desiredVelocity.Magnitude <= 0 then
		return desiredVelocity
	end
	if NAmanage.IsCharacterFullyNoClip(root.Parent) then
		return desiredVelocity
	end
	local flatDesired = Vector3.new(desiredVelocity.X, 0, desiredVelocity.Z)
	if flatDesired.Magnitude <= 0 then
		return desiredVelocity
	end
	local params = RaycastParams.new()
	params.FilterType = Enum.RaycastFilterType.Blacklist
	params.FilterDescendantsInstances = ignoreList or { root.Parent }
	local rootSize = root.Size
	local halfX = math.abs(rootSize.X) * 0.5
	local halfZ = math.abs(rootSize.Z) * 0.5
	local buffer = 0.12
	local look = flatDesired.Unit
	local localLook = root.CFrame:VectorToObjectSpace(look)
	local reach = math.abs(localLook.X) * halfX + math.abs(localLook.Z) * halfZ
	local stopDistance = reach + buffer
	local direction = look * math.clamp(stopDistance + math.clamp(flatDesired.Magnitude * 0.012, 0.05, 0.25), 0.75, 2.1)
	local origins = {
		root.Position,
		root.Position + Vector3.new(0, 1.5, 0),
	}
	for i = 1, #origins do
		local result = Services.Workspace:Raycast(origins[i], direction, params)
		if result and result.Instance and result.Instance.CanCollide and result.Distance <= stopDistance then
			local flatNormal = Vector3.new(result.Normal.X, 0, result.Normal.Z)
			if flatNormal.Magnitude > 0.05 and math.abs(result.Normal.Y) < 0.45 then
				flatNormal = flatNormal.Unit
				local dot = flatDesired:Dot(flatNormal)
				if dot < 0 then
					flatDesired = flatDesired - flatNormal * dot
				end
			end
		end
	end
	if flatDesired.Magnitude < 0.05 then
		return Vector3.zero
	end
	return Vector3.new(flatDesired.X, 0, flatDesired.Z)
end

NAmanage.EnsureVelocityWalkSpeedHelper = function(root)
	if not root or not root.Parent then
		return nil
	end
	local state = NAmanage.GetVelocityWalkSpeedState()
	local part = state.part
	if not part or part.Parent == nil then
		part = InstanceNew("Part", Services.Workspace)
		NAmanage.configureFlyHelper(part)
		pcall(function()
			part.Anchored = false
			part.CFrame = root.CFrame
		end)
		state.part = part
		state.weld = nil
		state.bv = nil
	end
	local weld = state.weld
	if not weld or weld.Parent ~= part then
		if weld then
			pcall(function()
				weld:Destroy()
			end)
		end
		weld = InstanceNew("Weld", part)
		state.weld = weld
	end
	local bv = state.bv
	if not bv or bv.Parent ~= part then
		if bv then
			pcall(function()
				bv:Destroy()
			end)
		end
		bv = InstanceNew("BodyVelocity", part)
		bv.P = 1.2e4
		bv.Velocity = Vector3.zero
		bv.MaxForce = Vector3.zero
		state.bv = bv
	end
	pcall(function()
		if weld.Part0 ~= part then
			weld.Part0 = part
		end
		if weld.Part1 ~= root then
			weld.Part1 = root
			part.CFrame = root.CFrame
		end
		weld.C0 = CFrame.new()
	end)
	return state
end

NAmanage.StopVelocityWalkSpeed = function()
	NAlib.disconnect("na_velocityws_apply")
	NAmanage.ClearVelocityWalkSpeedClampState()
	NAmanage.DestroyVelocityWalkSpeedHelper()
end
NAmanage.RefreshVelocityWalkSpeed = function()
	local targetSpeed = NAmanage.GetVelocityWalkSpeedValue()
	if not targetSpeed or targetSpeed <= 0 then
		NAmanage.StopVelocityWalkSpeed()
		return
	end
	if NAlib.isConnected("na_velocityws_apply") then
		return
	end
	NAmanage.EnsureVelocityWalkSpeedClampLoop()
	NAlib.connect("na_velocityws_apply", Services.RunService.PreSimulation:Connect(function()
		local speed = NAmanage.GetVelocityWalkSpeedValue()
		if not speed or speed <= 0 then
			NAmanage.ClearVelocityWalkSpeedClampState()
			NAmanage.SetVelocityWalkSpeedHelperActive(Vector3.zero, false)
			return
		end
		local hum = getHum()
		if not hum or hum.Health <= 0 or hum.Sit then
			NAmanage.ClearVelocityWalkSpeedClampState()
			NAmanage.SetVelocityWalkSpeedHelperActive(Vector3.zero, false)
			return
		end
		local root = hum.RootPart or getRoot(hum.Parent)
		if not root then
			NAmanage.ClearVelocityWalkSpeedClampState()
			NAmanage.SetVelocityWalkSpeedHelperActive(Vector3.zero, false)
			return
		end
		if FLYING and NAmanage._state and NAmanage._state.mode ~= "none" then
			NAmanage.ClearVelocityWalkSpeedClampState()
			NAmanage.SetVelocityWalkSpeedHelperActive(Vector3.zero, false, root)
			return
		end
		local helperState = NAmanage.EnsureVelocityWalkSpeedHelper(root)
		if not helperState then
			return
		end
		if hum:GetState() == Enum.HumanoidStateType.Climbing then
			local climbInput = hum.MoveDirection.Y
			if math.abs(climbInput) <= 0.05 then
				local mv = GetCustomMoveVector()
				if math.abs(mv.Y) > 0.05 then
					climbInput = mv.Y
				else
					climbInput = -mv.Z
				end
			end
			if math.abs(climbInput) <= 0.05 then
				NAmanage.ClearVelocityWalkSpeedClampState()
				NAmanage.SetVelocityWalkSpeedHelperActive(Vector3.zero, false, root)
				return
			end
			NAmanage.SetVelocityWalkSpeedClampState(root, hum, Vector3.new(0, 1, 0))
			NAmanage.SetVelocityWalkSpeedHelperActive(Vector3.new(0, math.clamp(climbInput, -1, 1) * speed, 0), true, root)
			return
		end
		local flatDirection = NAmanage.GetVelocityWalkSpeedMoveDirection(root, hum)
		if flatDirection.Magnitude <= 0 then
			NAmanage.ClearVelocityWalkSpeedClampState()
			NAmanage.SetVelocityWalkSpeedHelperActive(Vector3.zero, false, root)
			NAmanage.BrakeVelocityWalkSpeedPlanarDrift(root, hum)
			return
		end
		local desiredVelocity = flatDirection * speed
		local adjustedVelocity = NAmanage.GetVelocityWalkSpeedWallAdjustedVelocity(root, desiredVelocity, {
			hum.Parent,
			helperState.part,
		})
		NAmanage.SetVelocityWalkSpeedClampState(root, hum, Vector3.new(1, 0, 1), adjustedVelocity)
		NAmanage.SetVelocityWalkSpeedHelperActive(adjustedVelocity, adjustedVelocity.Magnitude > 0.05, root)
		NAmanage.MarkVelocityWalkSpeedPlanarDrive(root, adjustedVelocity)
		NAmanage.ClampVelocityWalkSpeedRoot()
	end))
end

local function stop()
    _na_env.NamelessSpeed = nil
    NAmanage.StopVelocityWalkSpeed()
    for key, connection in pairs(connections) do
        connection:Disconnect()
        connections[key] = nil
    end
    if NAStuff._moveInputBegan then
        NAStuff._moveInputBegan:Disconnect()
        NAStuff._moveInputBegan = nil
    end
    if NAStuff._moveInputEnded then
        NAStuff._moveInputEnded:Disconnect()
        NAStuff._moveInputEnded = nil
    end
    if NAStuff.Helper_SecureContainer then
        NAStuff.Helper_SecureContainer:Destroy()
        NAStuff.Helper_SecureContainer = nil
    end
    sussyINPUTTER = {W=false, A=false, S=false, D=false}
    customVECTORMOVE = Vector3.zero
    thumberSTICKER = Vector2.zero
    NAmanage.updateInputVector()
end


function kode.safeloopwalkspeed(speed)
    if speed == false then
        stop()
        return
    end
    if speed == nil then speed = kode.Settings.SafeWalkSpeed end
    speed = tonumber(speed)
    assert(speed and speed == speed and speed > 0 and speed < math.huge,
        "speed must be a finite number greater than zero")
    if not _na_env.NamelessSpeed then
        stop()
        startInput()
    end
    _na_env.NamelessSpeed = speed
    NAmanage.RefreshVelocityWalkSpeed()
    return speed
end

kode.safeloopws = kode.safeloopwalkspeed
kode.safelws = kode.safeloopwalkspeed
kode.slws = kode.safeloopwalkspeed

kode.stopsafeloopwalkspeed = stop
kode.unsafeloopwalkspeed = stop
kode.unsafeloopws = stop
kode.unsafelws = stop
kode.unslws = stop

function kode.Destroy()
    stop()
    kode.StopTP()
end
end

return kode;