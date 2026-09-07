local kode = {}

kode.Services = {
    TweenService = game:GetService("TweenService"),
    Players = game:GetService("Players"),
}

kode.Settings = {
    TPTime = 1,
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

    if not target then
        return
    end

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

return kode;