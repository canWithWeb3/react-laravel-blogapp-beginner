<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;
use Cocur\Slugify\Slugify;

class Category extends Model
{
    use HasFactory, Sluggable;

    protected $guarded = [];

    public function scopeOrderByName($query)
    {
        return $query->orderBy('name', 'ASC');
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
                'onUpdate' => true,
                'maxLength' => 255,
                'includeTrashed' => true,
                'method' => function ($string, $separator) {
                    $slugify = new Slugify();
                    $slugify->activateRuleSet('turkish');
                    return $slugify->slugify($string, $separator);
                }
            ]
        ];
    }
}
