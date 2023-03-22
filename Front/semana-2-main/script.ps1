foreach($nombre in $(Get-Content -Path .\nombres.txt)){
    if ($nombre -eq "Juan") {
        Write-Output "Encontre a Juan";
    }else {
        $OtroNombre++;
    }

    Write-Output "El nombre de la persona es $nombre"
    $country = Invoke-RestMethod -Method Get -Uri https://api.nationalize.io/?name=$nombre | Select-Object -ExpandProperty Country | Select-Object -First 1 -Property country_id
    Write-Output "El pais donde mas comun es el nombre es: $($country.country_id)"
    $gender = Invoke-RestMethod -Method Get -Uri https://api.genderize.io/?name=$nombre | Select-Object -ExpandProperty Gender
    Write-Output "El género de $nombre es: $gender"
}

Write-Output "La cantidad de personas que no son Juan es: $OtroNombre"