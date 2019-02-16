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
        "name": "斷滅的一閃",
        "rare": 8,
        "type": "switchAxe",
        "series": "滅盡龍",
        "attack": 700,
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
        "name": "惡靈",
        "rare": 8,
        "type": "switchAxe",
        "series": "角龍",
        "attack": 805,
        "criticalRate": -30,
        "defense": 15,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 90,
                "orange": 50,
                "yellow": 60,
                "green": 120,
                "blue": 60,
                "white": 20
            }
        },
        "element": {
            "attack": {
                "type": "ice",
                "minValue": 180,
                "maxValue": 230,
                "isHidden": true
            },
            "status": null
        },
        "elderseal": null,
        "slots": [
            {
                "size": 1
            }
        ],
        "skills": null
    },
    {
        "name": "斷雷斧麒麟",
        "rare": 8,
        "type": "switchAxe",
        "series": "幻獸",
        "attack": 560,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 110,
                "orange": 20,
                "yellow": 20,
                "green": 140,
                "blue": 110,
                "white": 0
            }
        },
        "element": {
            "attack": {
                "type": "thunder",
                "minValue": 420,
                "maxValue": 550,
                "isHidden": false
            },
            "status": null
        },
        "elderseal": null,
        "slots": null,
        "skills": null
    },
    {
        "name": "炎王城寨",
        "rare": 8,
        "type": "switchAxe",
        "series": "黑鋼",
        "attack": 665,
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
                "minValue": 300,
                "maxValue": 370,
                "isHidden": false
            }
        },
        "elderseal": null,
        "slots": null,
        "skills": null
    },
    {
        "name": "冥燈龍劍斧",
        "rare": 8,
        "type": "switchAxe",
        "series": "冥燈龍",
        "attack": 595,
        "criticalRate": 15,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 130,
                "orange": 30,
                "yellow": 60,
                "green": 90,
                "blue": 30,
                "white": 60
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
        "name": "鎧羅劍斧．雷",
        "rare": 8,
        "type": "switchAxe",
        "series": "絢輝龍",
        "attack": 560,
        "criticalRate": 10,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 120,
                "orange": 30,
                "yellow": 60,
                "green": 80,
                "blue": 40,
                "white": 70
            }
        },
        "element": {
            "attack": {
                "type": "thunder",
                "minValue": 480,
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
        "name": "鎧羅劍斧．睡眠",
        "rare": 8,
        "type": "switchAxe",
        "series": "絢輝龍",
        "attack": 665,
        "criticalRate": 0,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 60,
                "orange": 50,
                "yellow": 60,
                "green": 120,
                "blue": 70,
                "white": 40
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "sleep",
                "minValue": 360,
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
        "name": "鎧羅劍斧．麻痺",
        "rare": 8,
        "type": "switchAxe",
        "series": "絢輝龍",
        "attack": 735,
        "criticalRate": 0,
        "defense": 30,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 110,
                "orange": 100,
                "yellow": 40,
                "green": 40,
                "blue": 110,
                "white": 0
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "paralysis",
                "minValue": 450,
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
        "name": "皇后斧．炎妃",
        "rare": 8,
        "type": "switchAxe",
        "series": "炎妃龍",
        "attack": 630,
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
                "size": 2
            },
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
        "name": "皇后斧．滅盡",
        "rare": 8,
        "type": "switchAxe",
        "series": "炎妃龍．滅盡",
        "attack": 665,
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
            },
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
        "name": "皇后斧．冥燈",
        "rare": 8,
        "type": "switchAxe",
        "series": "炎妃龍．冥燈",
        "attack": 630,
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
                "size": 3
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