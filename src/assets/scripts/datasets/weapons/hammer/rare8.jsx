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
        "name": "潰滅一擊",
        "rare": 8,
        "type": "hammer",
        "series": "滅盡龍",
        "attack": 1092,
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
                "minValue": 120,
                "maxValue": 160,
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
        "name": "惡靈禍根",
        "rare": 8,
        "type": "hammer",
        "series": "屍套龍",
        "attack": 1040,
        "criticalRate": 0,
        "defense": 0,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 200,
                "orange": 70,
                "yellow": 20,
                "green": 20,
                "blue": 50,
                "white": 40
            }
        },
        "element": {
            "attack": {
                "type": "dragon",
                "minValue": 270,
                "maxValue": 350,
                "isHidden": false
            },
            "status": null
        },
        "elderseal": {
            "affinity": "medium"
        },
        "slots": [
            {
                "size": 2
            }
        ],
        "skills": null
    },
    {
        "name": "活火爆發熔山龍爆鎚",
        "rare": 8,
        "type": "hammer",
        "series": "熔山龍",
        "attack": 1144,
        "criticalRate": -20,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 190,
                "orange": 30,
                "yellow": 60,
                "green": 80,
                "blue": 40,
                "white": 0
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "blast",
                "minValue": 420,
                "maxValue": 510,
                "isHidden": false
            }
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
        "name": "巨大鋼龍錘",
        "rare": 8,
        "type": "hammer",
        "series": "黑鋼",
        "attack": 1040,
        "criticalRate": 10,
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
                "type": "ice",
                "minValue": 150,
                "maxValue": 200,
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
        "name": "冥燈龍大鎚",
        "rare": 8,
        "type": "hammer",
        "series": "冥燈龍",
        "attack": 884,
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
        "name": "電擊鎚",
        "rare": 8,
        "type": "hammer",
        "series": "工房武器",
        "attack": 936,
        "criticalRate": 0,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 160,
                "orange": 100,
                "yellow": 30,
                "green": 30,
                "blue": 50,
                "white": 30
            }
        },
        "element": {
            "attack": null,
            "status": {
                "type": "paralysis",
                "minValue": 210,
                "maxValue": 260,
                "isHidden": false
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
        "name": "鎧羅大錘．冰",
        "rare": 8,
        "type": "hammer",
        "series": "絢輝龍",
        "attack": 988,
        "criticalRate": 0,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 190,
                "orange": 70,
                "yellow": 20,
                "green": 20,
                "blue": 60,
                "white": 40
            }
        },
        "element": {
            "attack": {
                "type": "ice",
                "minValue": 510,
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
        "name": "鎧羅大錘．雷",
        "rare": 8,
        "type": "hammer",
        "series": "絢輝龍",
        "attack": 988,
        "criticalRate": 0,
        "defense": 30,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 150,
                "orange": 100,
                "yellow": 30,
                "green": 30,
                "blue": 60,
                "white": 30
            }
        },
        "element": {
            "attack": {
                "type": "thunder",
                "minValue": 480,
                "maxValue": 580,
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
        "name": "鎧羅大錘．水",
        "rare": 8,
        "type": "hammer",
        "series": "絢輝龍",
        "attack": 988,
        "criticalRate": 0,
        "defense": 20,
        "sharpness": {
            "value": 350,
            "steps": {
                "red": 80,
                "orange": 50,
                "yellow": 60,
                "green": 120,
                "blue": 50,
                "white": 40
            }
        },
        "element": {
            "attack": {
                "type": "water",
                "minValue": 360,
                "maxValue": 470,
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
        "name": "皇后鏈錘．炎妃",
        "rare": 8,
        "type": "hammer",
        "series": "炎妃龍",
        "attack": 936,
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
        "name": "皇后鏈錘．滅盡",
        "rare": 8,
        "type": "hammer",
        "series": "炎妃龍．滅盡",
        "attack": 988,
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
        "name": "皇后鏈錘．冥燈",
        "rare": 8,
        "type": "hammer",
        "series": "炎妃龍．冥燈",
        "attack": 936,
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