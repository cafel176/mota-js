// 这里需要改楼层名，请和文件名及下面的floorId保持完全一致
main.floors.sample1 = {
    'floorId': 'sample1', // 楼层唯一标识符，需要和名字完全一致
    'title': "样板 1 层", // 楼层中文名
    'name': 1, // 显示在状态栏中的名称
    "canFlyTo": true, // 该楼能否被楼传器飞到（不能的话在该楼也不允许使用楼传器）
    "map": [ // 地图数据，需要是13x13，建议使用地图生成器来生成
        [7,    131,  8,    2,    9,    130,  10,   2,    0,    0,    132,  0,    0],
        [0,    0,    0,    0,    0,    0,    0,    2,    0,    0,    0,    0,    0],
        [2,    2,    2,    2,    121,  2,    2,    2,    0,    0,    229,  0,    0],
        [43,   33,   44,   1,    0,    0,    0,    2,    0,    0,    0,    0,    0],
        [21,   22,   21,   1,    0,    0,    0,    2,    0,    0,    0,    0,    0],
        [1,    245,  1,    1,    0,    87,   0,    2,    2,    2,    85,   2,    2],
        [0,    246,  0,    1,    0,    0,    0,    2,    2,    221,  0,    221,  2],
        [246,  0,    246,  1,    0,    0,    0,    121,  85,   0,    0,    0,    2],
        [1,    246,  1,    1,    0,    2,    2,    2,    2,    2,    2,    2,    2],
        [0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0],
        [1,    1,    1,    1,    0,    3,    0,    0,    0,    0,    0,    0,    0],
        [1,    0,    123,  1,    0,    3,    124,  0,    121,  0,    122,  0,    126],
        [1,    0,    0,    1,    88,   3,    86,   0,    0,    0,    0,    0,    0],
    ],
    "firstArrive": [ // 第一次到该楼层触发的事件

    ],
    "events": { // 该楼的所有可能事件列表

        "4,10": [ // 走到中间时的提示
            "\t[样板提示]本层楼将会对各类事件进行介绍。",
            "左边是一个仿50层的陷阱做法，上方是商店、快捷\n商店的使用方法，右上是一个典型的杀怪开门的例\n子，右下是各类可能的NPC事件。",
            "本样板目前支持的事件列表大致有：\ntext: 显示一段文字（比如你现在正在看到的）\nshow: 使一个事件有效（可见、可被交互）\nhide: 使一个事件失效（不可见、不可被交互）\ntrigger: 触发另一个地点的事件\nbattle: 强制和某怪物战斗\nopenDoor: 无需钥匙开门（例如机关门、暗墙）\nopenShop: 打开一个全局商店\nchangeFloor: 传送勇士到某层某位置\nchangePos: 传送勇士到当层某位置\nwin: 获得胜利（游戏通关）\nlose: 游戏失败",
            "move: 移动事件效果\nplaySound: 播放某个音频\nif: 条件判断\nchoices: 提供选项\nsetValue: 设置勇士属性、道具，或某个变量/flag\nupdate: 更新状态栏和地图显伤\nsleep: 等待多少毫秒\nexit: 立刻结束当前事件\nrevisit: 立刻结束事件并重新触发\nfunction: 自定义JS脚本\n\n更多支持的事件还在编写中，欢迎您宝贵的意见。",
            "有关各类事件的样例，可参见本层一些NPC的写法。\n所有事件样例本层都有介绍。\n\n一个自定义事件处理完后，需要调用\n{\"type\": \"hide\"}\n该事件才不会再次出现。",
            {"type": "hide"}
        ],



        /****** 左边仿50F陷阱事件 ******/
        "1,5": {"enable": false}, // 这几个是白衣武士等怪物，起始时需要隐藏起来
        "1,6": {"enable": false},
        "0,7": {"enable": false},
        "2,7": {"enable": false},
        "1,8": {"enable": false},
        "1,7": [ // 走到白衣武士中间，触发陷阱事件
            {"type": "show", "loc": [1,5], "time": 1500}, // 显示红衣魔王，动画效果1500ms
            {"type": "sleep", "time": 500}, // 等待500ms
            "\t[redKing]欢迎来到魔塔，你是第一百位挑战者。\n若你能打败我所有的手下，我就与你一对一\n的决斗。\n现在你必须接受我的安排。",
            {"type": "show", "loc": [1,6], "time": 500}, // 显示四个白衣武士，每个动画效果500ms
            {"type": "show", "loc": [0,7], "time": 500},
            {"type": "show", "loc": [1,8], "time": 500},
            {"type": "show", "loc": [2,7], "time": 500},
            "\t[hero]什么？",
            {"type": "playSound", "name": "attack.ogg"}, // 播放战斗音频
            {"type": "setValue", "name": "status:atk", "value": "status:atk/10"}, // 勇士的攻防变成原来的十分之一
            {"type": "setValue", "name": "status:def", "value": "status:def/10"},
            {"type": "hide", "loc": [1,6]}, // 直接隐藏四个白衣武士，没有动画效果
            {"type": "hide", "loc": [0,7]},
            {"type": "hide", "loc": [2,7]},
            {"type": "hide", "loc": [1,8]},
            {"type": "hide", "loc": [1,5], "time": 500}, // 隐藏红衣魔王，动画500ms
            {"type": "hide"}, // 隐藏本事件
            {"type": "changeFloor", "floorId": "sample1", "loc": [1,11]}, // 楼层切换。changeFloor必须指定floorId和loc。
            // 备注：这里也可以下面的这种写法：
            // {"type": "changePos", "loc": [1,11]}
            // 使用这种写法将不会有“楼层切换动画”，而是直接让勇士到达本层的loc位置。
            {"type": "trigger", "floodId": "sample1", "loc": [2,11]} // 立刻直接触发另一个事件（也就是下面的小偷事件）；当前事件会被立刻结束
        ],
        "2,11": [ // 小偷事件
            "\t[杰克,thief]喂！醒醒！快醒醒！",
            "\t[hero]额，我这是在什么地方？",
            "\t[杰克,thief]你被魔王抓了起来扔进了监狱，和我关在了一\n起，但是幸运的是我在昨天刚刚挖好一条越狱\n的暗道！",
            {"type": "openDoor", "loc": [3,11]}, // 开门或墙必须指定门/墙的名称，否则不会执行
            {"type": "sleep", "time": 300}, // 等待300ms
            "\t[杰克,thief]我先走了，祝你好运！",
            {"type": "move", "time": 750, "steps": [ // 动画移动效果，time为每步事件（毫秒），steps是个数组指定了移动的方位
                {"direction": "right", "value": 2}, // 向右移动两步，再向下移动一步，并消失
                "down" // 如果该方向只移动一步，可以直接这样简写。 这种写法等价于： {"direction":"down","value":1}
            ]},
            // 调用move事件后，hide事件也会被自动调用，因此无需再手动调用 {"type":"hide"} 来隐藏本事件了
            "上面是个move事件，可以对NPC等进行移动。\n详见样板中小偷事件的写法。",
            "\t[hero]怎么跑的这么快..."
        ],



        /****** 上方商店事件相关 ******/
        "4,2": [ // 商店门前的老人
            "\t[老人,man]本塔的商店有两类，全局商店和非全局商店。\n\n所谓非全局商店，就类似于右下角那个卖钥匙\n的老人一样，一定要碰到才能触发事件。\n\n而全局商店，则能在快捷商店中直接使用。",
            "\t[老人,man]要注册一个全局商店，你需要在 data.js 中，\n找到 shops，并在内添加你的商店信息。",
            "\t[老人,man]商店信息添加后，可以在需要的事件处调用\n{\"type\": \"openShop\"}\n来打开你添加的全局商店。",
            "\t[老人,man]在上面的例子里，左边是一个仿50层的金币\n商店，右边是一个仿24层的经验商店。\n\n商店被访问后即可在快捷商店中进行使用。",
            {"type": "hide", "time": 500}
        ],
        "1,0": [ // 金币商店
            // 打开商店前，你也可以添加自己的剧情
            // 例如，通过if来事件来判断是不是第一次访问商店，是的则显示一段文字（类似宿命的华音那样）
            {"type": "openShop", "id": "moneyShop1"} // 这里的id要和data.js中你定义的商店ID完全一致
            // 调用openShop事件后，所有当前事件都会被结束（同exit事件），然后打开一个全局商店
        ],
        "5,0": [ // 经验商店
            {"type": "openShop", "id": "expShop1"}
        ],



        /****** 右边陷阱、战斗相关 ******/
        "7,7": [ // 门口老人的提示
            "\t[老人,man]这是一个典型的杀怪开门、强制战斗事件。",
            {"type": "hide"} // 不显示动画，直接消失
        ],
        "8,7": {"enable": false}, // 门口的机关门，初始时是禁用状态
        "9,7": [ // 当你刚进去后，触发机关门
            {"type": "show", "loc": [8,7]}, // 显示机关门
            {"type": "hide"} // 该事件消失
        ],
        // 注意：初级卫兵打死后的开门事件是在 afterBattle 中调用
        "10,4": [ // 开门后走进去的事件：强制战斗
            "\t[blackKing]你终于还是来了。",
            "\t[hero]放开我们的公主！",
            "\t[blackKing]如果我不愿意呢？",
            "\t[hero]无需多说，拔剑吧！",
            {"type": "battle", "id": "blackKing"}, // 强制战斗
            // 如果战斗失败直接死亡，不会继续触发接下来的剧情。
            {"type": "hide", "loc": [10,2]}, // 战斗后需要手动使怪物消失；战斗后不会引发afterBattle事件。
            {"type": "openDoor", "loc": [8,7]}, // 开门口的机关门
            "\t[blackKing]没想到你已经变得这么强大了... 算你厉害。\n公主就交给你了，请好好对她。",
            {"type": "hide"} // 隐藏本事件
        ],
        "10,0": [ // 公主事件
            "\t[hero]公主，我来救你了~",
            "\t[公主,princess]快救我出去！我受够这里了！",
            "\t[hero]公主别怕，我们走吧~",
            {"type": "win", "reason": "救出公主"} // 获得胜利。此事件将显示获胜界面，并结束游戏。
            // 该事件将直接调用events.js中的win()函数；如需修改获胜界面内容可前往修改。
            // 下面这个是失败事件，同样会直接调用events.js中的lose()函数；如需修改失败界面内容可以前往修改。
            // {"type": "lose", "reason": "救了假公主"}
        ],



        /****** 右下各种NPC事件相关 ******/
        "6,12": {"enable":false}, // 仙子下面的铁门，初始时是禁用的
        "6,11": [ // 仙子事件
            "\t[仙子,fairy]通过调用 {\"type\": \"show\"} 可以使隐藏的\n事件显示出来。\n比如我下面这个机关门。",
            {"type": "show", "loc": [6,12]}, // 使隐藏的铁门显示出来
            "\t[仙子,fairy]通过调用 {\"type\": \"openDoor\"} 可以无需\n钥匙打开一扇门或暗墙。",
            {"type": "openDoor", "loc": [6,12]}, // 开门
            "\t[仙子,fairy]同时，也可以对其它层进行操作，比如楼下\n的机关门，现在已经为你打开了。",
            {"type": "openDoor", "loc": [11,10], "floorId": "sample0"}, // 打开其它层的门，需要指定floorId
            "\t[仙子,fairy]如果 show 或 hide 指定了 time 参数，则\n以动画效果显示，指定的参数作为消失时间\n（毫秒）来计算。",
            "\t[仙子,fairy]现在到楼下来找我吧~",
            {"type": "show", "loc": [12,10], "floorId": "sample0"}, // 显示其它层的事件，需要指定其floorId
            {"type": "hide", "time": 500}
        ],
        "8,11": [ // 老人事件，勇士状态的显示与变化
            {"type": "setValue", "name": "flag:man_times", "value": "flag:man_times+1"}, // 设置这个老人的访问次数
            "\t[老人,man]在文字中使用${' ${ '}和 } 可以计算并显示一个\n表达式的结果。\n",
            "\t[老人,man]例如：\n你的当前攻击力是${status:atk}，防御力是${status:def}。\n攻防和的十倍是${10*(status:atk+status:def)}，攻防之积是${status:atk*status:def}。\n你有${item:yellowKey}把黄钥匙，${item:blueKey}把蓝钥匙，${item:redKey}把红钥匙。\n你有${item:pickaxe}个破，${item:bomb}个炸，${item:centerFly}个飞。\n这是你第${flag:man_times}次和我对话。",
            "\t[老人,man]同时，你也可以通过\n{\"type\": \"setValue\"}\n来设置一个勇士的属性、道具，或某个Flag。",
            "\t[老人,man]例如：\n现在我将让你的攻防提升50%，再将攻防和\n的十倍加到生命值上。",
            {"type": "setValue", "name": "status:atk", "value": "status:atk*1.5"}, // 攻击提升50%；注意不要加${}
            {"type": "setValue", "name": "status:def", "value": "status:def*1.5"}, // 防御提升50%；注意不要加${}
            {"type": "setValue", "name": "status:hp", "value": "status:hp+10*(status:atk+status:def)"}, //生命提升攻防和的十倍
            "\t[老人,man]再送你500金币，1000经验，1破2炸3飞！",
            {"type": "setValue", "name": "status:money", "value": "status:money+500"},
            {"type": "setValue", "name": "status:experience", "value": "status:experience+1000"},
            {"type": "setValue", "name": "item:pickaxe", "value": "item:pickaxe+1"}, // 1破
            {"type": "setValue", "name": "item:bomb", "value": "item:bomb+2"}, // 2炸
            {"type": "setValue", "name": "item:centerFly", "value": "item:centerFly+3"}, // 3飞
            "\t[老人,man]status:xxx 代表勇士的某个属性。\n其中xxx可取hp, atk, def, mdef, money,\nexperience这几项。\n\nitem:xxx 代表勇士的某个道具的个数。\nxxx为道具ID，具体可参见items.js中的定义。\n\nflag:xxx 代表某个自定义Flag或变量。\nxxx为Flag/变量名，可以自行定义，由字母、\n数字和下划线组成。\n未定义过而直接取用的Flag默认值为false。",
            // 如果老人不消失，则不要调用 {"type": "hide"}
            "\t[老人,man]你现在可以重新和我进行对话，进一步看到\n属性值的改变。"
        ],
        "10,11": [ // 商人事件，if语句和choices语句的写法
            // 这部分逻辑相对比较长，细心看，很容易看懂的。
            {"type": "if", "condition": "flag:woman_times==0", // 条件判断：是否从未访问过此商人。
                "true": [ // 如果从未访问过该商人，显示一段文字
                    "\t[老人,woman]这是个很复杂的例子，它将教会你如何使用\nif 语句进行条件判断，以及 choices 提供\n选项来供用户进行选择。",
                    "\t[老人,woman]第一次访问我将显示这段文字；从第二次开始\n将会向你出售钥匙。\n钥匙价格将随着访问次数递增。\n当合计出售了七把钥匙后，将送你一把大黄门\n钥匙，并消失不再出现。",
                    "\t[老人,woman]这部分的逻辑比较长，请细心看样板的写法，\n是很容易看懂并理解的。"
                    // 第一次访问结束
                ],
                "false": [ // 如果已经访问过该商人
                    {"type": "if", "condition": "flag:woman_times==8", // 条件判断：是否已经出售七把钥匙
                        "true": [ // 如果已经出售过七把钥匙，则直接结束
                            "\t[老人,woman]你购买的钥匙已经够多了，再继续卖给你的话\n我会有危险的。",
                            "\t[老人,woman]看在你贡献给我这么多钱的份上，送你一把大\n黄门钥匙吧，希望你能好好用它。",
                            {"type": "setValue", "name": "item:bigKey", "value": "item:bigKey+1"}, // 获得一把大黄门钥匙
                            "\t[老人,woman]我先走了，拜拜~",
                            {"type":"hide", "time": 500}, // 消失
                            {"type":"exit"} // 立刻结束当前事件。下面的 setValue 和 revisit 都不会再执行。
                        ],
                        "false": [ // 否则，显示选择页面
                            {"type": "choices", "text": "\t[老人,woman]少年，你需要钥匙吗？\n我这里有大把的！", // 显示一个选择页面
                                "choices": [ // 提供四个选项：黄钥匙、蓝钥匙、红钥匙、离开。前三个选项显示需要的金额
                                    {"text": "黄钥匙（${9+flag:woman_times}金币）", "action": [ // 第一个选项，黄钥匙
                                        // 选择该选项的执行内容
                                        // 条件判断：钱够不够
                                        {"type": "if", "condition": "status:money>=9+flag:woman_times",
                                            "true": [
                                                {"type": "setValue", "name": "status:money", "value": "status:money-(9+flag:woman_times)"}, // 扣减金钱
                                                {"type": "setValue", "name": "item:yellowKey", "value": "item:yellowKey+1"}, // 增加黄钥匙
                                                // 然后会继续执行下面的setValue来增加商人访问次数
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {"type": "revisit"} // 直接重新访问；不执行下面的setValue来增加访问次数
                                            ]
                                        }
                                    ]},
                                    {"text": "蓝钥匙（${18+2*flag:woman_times}金币）", "action": [ // 第二个选项：蓝钥匙
                                        // 逻辑和上面黄钥匙完全相同，不赘述
                                        {"type": "if", "condition": "status:money>=18+2*flag:woman_times",
                                            "true": [
                                                {"type": "setValue", "name": "status:money", "value": "status:money-(18+2*flag:woman_times)"},
                                                {"type": "setValue", "name": "item:blueKey", "value": "item:blueKey+1"},
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {"type": "revisit"}
                                            ]
                                        }
                                    ]},
                                    {"text": "红钥匙（${36+4*flag:woman_times}金币）", "action": [ // 第三个选项：红钥匙
                                        // 逻辑和上面黄钥匙完全相同，不赘述
                                        {"type": "if", "condition": "status:money>=36+4*flag:woman_times",
                                            "true": [
                                                {"type": "setValue", "name": "status:money", "value": "status:money-(36+4*flag:woman_times)"},
                                                {"type": "setValue", "name": "item:redKey", "value": "item:redKey+1"},
                                            ],
                                            "false": [
                                                "\t[老人,woman]你的金钱不足！",
                                                {"type": "revisit"}
                                            ]
                                        }
                                    ]},
                                    {"text": "离开", "action": [ // 第四个选项：离开
                                        {"type": "exit"} // 立刻结束当前事件
                                    ]}
                                ]
                            }
                        ]
                    }
                ]
            },
            {"type": "setValue", "name": "flag:woman_times", "value": "flag:woman_times+1"}, // 增加该商人的访问次数。
            {"type": "revisit"} // 立即重新开始这个事件
        ],
        "12,11": [ // 自定义事件的老人
            "\t[老人,womanMagician]使用 {\"type\":\"function\"} 可以写自定义的\nJS脚本。\n本塔支持的所有主要API会在doc文档内给出。",
            "\t[老人,womanMagician]例如这个例子：即将弹出一个输入窗口，然后\n会将你的输入结果直接加到你的攻击力上。",
            {"type": "function", "function": function() { // 自己写JS脚本并执行
                var value = prompt("请输入你要加攻击力的数值："); // 弹出一个输入框让用户输入数据
                if (value!=null) {
                    value=parseInt(value);
                    if (value>0) { // 检查
                        core.setStatus("atk", core.getStatus("atk")+value);
                        // core.updateStatusBar(); // 和下面的 {"type": "update"} 等价，立即更新状态栏和地图显伤
                        core.drawTip("操作成功，攻击+"+value); // 左上角气泡提示
                        core.events.insertAction([ // 往当前事件列表前插入两条事件
                            {"type": "update"}, // 更新状态栏和地图显伤
                            "操作成功，攻击+"+value // 对话框提示
                        ]);
                    }
                }
            }},
            "\t[老人,womanMagician]具体可参见样板中本事件的写法。"
        ]
    },
    "changeFloor": { // 楼层转换事件；该事件不能和上面的events有冲突（同位置点），否则会被覆盖
        "4,12": {"floorId": "sample0", "loc": [6,0]} // 由于楼下有多个上楼梯，所以需指定位置而不是简单地写"stair": "upFloor"
    },
    "afterBattle": { // 战斗后可能触发的事件列表
        "9,6": [ // 初级卫兵1
            {"type": "setValue", "name": "flag:door", "value": "flag:door+1"}, // 将"door"这个自定义flag加一
            {"type": "if", "condition": "flag:door==2", // 一个条件判断事件，条件是"door"这个flag值等于2
                "true": [ // 如果条件成立：打开机关门
                    {"type": "openDoor", "loc": [10,5]}
                ],
                "false": [] // 如果条件不成立则无事件触发
            },
        ],
        "11,6": [ // 初级卫兵2；注意由于打怪顺序问题，可能都得写一遍。
            {"type": "setValue", "name": "flag:door", "value": "flag:door+1"}, // 将"door"这个自定义flag加一
            {"type": "if", "condition": "flag:door==2", // 一个条件判断事件，条件是"door"这个flag值等于2
                "true": [ // 如果条件成立：打开机关门
                    {"type": "openDoor", "loc": [10,5]}
                ],
                "false": [] // 如果条件不成立则无事件触发
            },
        ],
    },
    "afterGetItem": { // 获得道具后可能触发的事件列表

    },
    "afterOpenDoor": { // 开完门后可能触发的事件列表

    },
    "checkBlock": [
        /****** 领域、夹击检查事件 ******/
        // 所有可能的领域、夹击点均需要在这里给出，否则将不会触发检查事件
        // 另外，如果该点已经存在events事件或changeFloor事件（即上面有相同点位置定义），则会被覆盖
        // afterBattle, afterGetItem, afterOpenDoor则不受影响（仍能正常工作）。
        // 所以 |****** 强烈要求可能的夹击、领域点不要存在自定义事件！！ ******|
    ]

}

