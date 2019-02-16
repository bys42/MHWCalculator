'use strict';
/**
 * Dataset Weapons
 *
 * @package     MHW Calculator
 * @author      Scar Wu
 * @copyright   Copyright (c) Scar Wu (http://scar.tw)
 * @link        https://github.com/scarwu/MHWCalculator
 */

export default [
    {
        "name": "寂滅的章節",
        "rare": 8,
        "type": "huntingHorn",
        "series": "滅盡龍",
        "attack": 882,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 400,
            "steps": {
                "red": 110,
                "orange": 120,
                "yellow": 40,
                "green": 50,
                "blue": 80,
                "white": 0
            }
        },
        "element": {
            "attack": {
                "type": "dragon",
                "minValue": 150,
                "maxValue": 200,
                "isHidden": false
            },
            "status": null
        },
        "elderseal": {
            "affinity": "high"
        },
        "slots": [
            {
                "size": 1
            }
        ],
        "skills": null
    },
    {
        "name": "爆鱗鼓赤紅星光",
        "rare": 8,
        "type": "huntingHorn",
        "series": "爆鱗龍",
        "attack": 840,
        "criticalRate": -10,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 70,
                "orange": 120,
                "yellow": 80,
                "green": 60,
                "blue": 20,
                "white": 50
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "blast",
                "minValue": 210,
                "maxValue": 260,
                "isHidden": false
            }
        },
        "elderseal": null,
        "slots": [
            {
                "size": 2
            },
            {
                "size": 2
            }
        ],
        "skills": null
    },
    {
        "name": "炎王豎琴",
        "rare": 8,
        "type": "huntingHorn",
        "series": "黑鋼",
        "attack": 798,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 90,
                "orange": 60,
                "yellow": 60,
                "green": 100,
                "blue": 60,
                "white": 30
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "blast",
                "minValue": 390,
                "maxValue": 480,
                "isHidden": false
            }
        },
        "elderseal": null,
        "slots": null,
        "skills": null
    },
    {
        "name": "冥燈龍狩獵笛",
        "rare": 8,
        "type": "huntingHorn",
        "series": "冥燈龍",
        "attack": 714,
        "criticalRate": 15,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 130,
                "orange": 30,
                "yellow": 60,
                "green": 80,
                "blue": 40,
                "white": 60
            }
        },
        "element": {
            "attack": {
                "type": "dragon",
                "minValue": 180,
                "maxValue": 230,
                "isHidden": false
            },
            "status": null
        },
        "elderseal": {
            "affinity": "low"
        },
        "slots": [
            {
                "size": 3
            },
            {
                "size": 3
            }
        ],
        "skills": null
    },
    {
        "name": "鎧羅風笛．水",
        "rare": 8,
        "type": "huntingHorn",
        "series": "絢輝龍",
        "attack": 714,
        "criticalRate": 10,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 110,
                "orange": 30,
                "yellow": 60,
                "green": 80,
                "blue": 40,
                "white": 80
            }
        },
        "element": {
            "attack": {
                "type": "water",
                "minValue": 630,
                "maxValue": null,
                "isHidden": true
            },
            "status": null
        },
        "elderseal": null,
        "slots": [
            {
                "size": 3
            }
        ],
        "skills": null
    },
    {
        "name": "鎧羅風笛．龍",
        "rare": 8,
        "type": "huntingHorn",
        "series": "絢輝龍",
        "attack": 756,
        "criticalRate": 0,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 240,
                "orange": 20,
                "yellow": 20,
                "green": 20,
                "blue": 30,
                "white": 70
            }
        },
        "element": {
            "attack": {
                "type": "dragon",
                "minValue": 540,
                "maxValue": 690,
                "isHidden": true
            },
            "status": null
        },
        "elderseal": {
            "affinity": "medium"
        },
        "slots": [
            {
                "size": 3
            }
        ],
        "skills": null
    },
    {
        "name": "鎧羅風笛．麻痺",
        "rare": 8,
        "type": "huntingHorn",
        "series": "絢輝龍",
        "attack": 840,
        "criticalRate": 0,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 50,
                "orange": 50,
                "yellow": 50,
                "green": 80,
                "blue": 170,
                "white": 0
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "paralysis",
                "minValue": 420,
                "maxValue": null,
                "isHidden": true
            }
        },
        "elderseal": null,
        "slots": [
            {
                "size": 3
            }
        ],
        "skills": null
    },
    {
        "name": "皇后鼓．炎妃",
        "rare": 8,
        "type": "huntingHorn",
        "series": "炎妃龍",
        "attack": 798,
        "criticalRate": 20,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 110,
                "orange": 30,
                "yellow": 60,
                "green": 80,
                "blue": 40,
                "white": 80
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "blast",
                "minValue": 180,
                "maxValue": 230,
                "isHidden": false
            }
        },
        "elderseal": null,
        "slots": [
            {
                "size": 1
            }
        ],
        "skills": [
            {
                "name": "毅力",
                "level": 1
            }
        ]
    },
    {
        "name": "皇后鼓．滅盡",
        "rare": 8,
        "type": "huntingHorn",
        "series": "炎妃龍．滅盡",
        "attack": 840,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 110,
                "orange": 30,
                "yellow": 60,
                "green": 80,
                "blue": 40,
                "white": 80
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "blast",
                "minValue": 150,
                "maxValue": 190,
                "isHidden": false
            }
        },
        "elderseal": null,
        "slots": [
            {
                "size": 2
            }
        ],
        "skills": [
            {
                "name": "加速再生",
                "level": 1
            }
        ]
    },
    {
        "name": "皇后鼓．冥燈",
        "rare": 8,
        "type": "huntingHorn",
        "series": "炎妃龍．冥燈",
        "attack": 798,
        "criticalRate": 10,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 110,
                "orange": 30,
                "yellow": 60,
                "green": 80,
                "blue": 40,
                "white": 80
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "blast",
                "minValue": 240,
                "maxValue": 300,
                "isHidden": false
            }
        },
        "elderseal": null,
        "slots": [
            {
                "size": 3
            },
            {
                "size": 1
            }
        ],
        "skills": [
            {
                "name": "利刃／彈藥節約",
                "level": 1
            }
        ]
    }
]