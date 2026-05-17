[Reflection.Assembly]::LoadWithPartialName('System.Drawing') | Out-Null
$img = new-object System.Drawing.Bitmap('f:\Antigravity\test\dentalmain3\public\clinic-frames\frame-0.jpg')
$p1 = $img.GetPixel(960, 10)
$p2 = $img.GetPixel(960, 1070)
Write-Output "Top: $($p1.R) $($p1.G) $($p1.B)"
Write-Output "Bottom: $($p2.R) $($p2.G) $($p2.B)"
