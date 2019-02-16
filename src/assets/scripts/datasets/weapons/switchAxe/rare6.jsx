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
        "name": "合金製完成劍斧 II",
        "rare": 6,
        "type": "switchAxe",
        "series": "礦石素材",
        "attack": 630,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 60,
                "orange": 60,
                "yellow": 20,
                "green": 150,
                "blue": 90,
                "white": 20
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "poison",
                "minValue": 420,
                "maxValue": 510,
                "isHidden": true
            }
        },
        "elderseal": null,
        "slots": [
            {
                "size": 1
            },
            {
                "size": 1
            }
        ],
        "skills": null
    },
    {
        "name": "雷光迅斧 III",
        "rare": 6,
        "type": "switchAxe",
        "series": "雷屬性",
        "attack": 630,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 90,
                "orange": 60,
                "yellow": 80,
                "green": 80,
                "blue": 70,
                "white": 20
            }
        },
        "element": {
            "attack": {
                "type": "thunder",
                "minValue": 180,
                "maxValue": 230,
                "isHidden": false
            },
            "status": null
        },
        "elderseal": null,
        "slots": [
            {
                "size": 2
            }
        ],
        "skills": null
    },
    {
        "name": "凶豺龍掠奪者 III",
        "rare": 6,
        "type": "switchAxe",
        "series": "大凶豺龍",
        "attack": 665,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 350,
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
            "attack": null,
            "status": {
                "type": "sleep",
                "minValue": 240,
                "maxValue": 300,
                "isHidden": true
            }
        },
        "elderseal": null,
        "slots": [
            {
                "size": 3
            },
            {
                "size": 2
            }
        ],
        "skills": null
    },
    {
        "name": "重擊斬斧 II",
        "rare": 6,
        "type": "switchAxe",
        "series": "駭骨素材",
        "attack": 665,
        "criticalRate": 10,
        "defense": 10,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 100,
                "orange": 120,
                "yellow": 40,
                "green": 50,
                "blue": 90,
                "white": 0
            }
        },
        "element": {
            "attack": null,
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
        "name": "土砂龍劍斧 III",
        "rare": 6,
        "type": "switchAxe",
        "series": "土砂龍",
        "attack": 735,
        "criticalRate": -20,
        "defense": 15,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 120,
                "orange": 70,
                "yellow": 30,
                "green": 100,
                "blue": 80,
                "white": 0
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "paralysis",
                "minValue": 300,
                "maxValue": 370,
                "isHidden": true
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
        "skills": null
    },
    {
        "name": "龍骨劍斧 III",
        "rare": 6,
        "type": "switchAxe",
        "series": "龍骨",
        "attack": 560,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 120,
                "orange": 110,
                "yellow": 40,
                "green": 40,
                "blue": 70,
                "white": 20
            }
        },
        "element": {
            "attack": {
                "type": "dragon",
                "minValue": 330,
                "maxValue": 430,
                "isHidden": false
            },
            "status": null
        },
        "elderseal": {
            "affinity": "low"
        },
        "slots": [
            {
                "size": 1
            },
            {
                "size": 1
            }
        ],
        "skills": null
    }
]