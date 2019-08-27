<?php


namespace App\Services;


class CreateImageService
{
    /**
     * Создаст картинку и сохранит в указаное место путь относительный
     * @param $base
     * @param $path
     * @return string
     */
    public static function createImage($base,$path)
    {
        preg_match('/data:image\/([png|jpeg]+);base64,/',$base,$out);
        $base64_str = str_replace($out[0],'',$base);
        $imageName = date("Y_m_dHis").'.'.$out[1];
        \File::put(storage_path($path).$imageName,base64_decode($base64_str));
        return $path.$imageName;
    }
}
