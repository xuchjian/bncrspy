let RspyList = {
    /* 监控信息配置 kr m 船长 环境*/
    SpyList: [
    
        {
            Name: '[KR] 店铺抽奖通用活动-加密',
            Script: 'KingRan_KR/jd_luck_draw.js',
            ListenEnv: [
                'LUCK_DRAW_URL',
            ],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 粉丝互动通用活动-加密',
            Script: 'KingRan_KR/jd_wxFansInterActionActivity.js',
            ListenEnv: [
                'jd_wxFansInterActionActivity_activityId',
            ],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 超级无线店铺签到-监控版',
            Script: 'KingRan_KR/jd_sevenDayjk.js',
            ListenEnv: [
                'jd_sevenDay_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 生日礼包和会员等级礼包',
            Script: 'KingRan_KR/jd_wxMcLevelAndBirthGifts.js',
            ListenEnv: [
                'jd_wxMcLevelAndBirthGifts_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 加购有礼通用-加密',
            Script: 'KingRan_KR/jd_wxCollectionActivity.js',
            ListenEnv: [
                'jd_wxCollectionActivity_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 关注店铺有礼',
            Script: 'KingRan_KR/jd_wxShopFollowActivity.js',
            ListenEnv: [
                'jd_wxShopFollowActivity_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 分享有礼-加密',
            Script: 'KingRan_KR/jd_wxShareActivity.js',
            ListenEnv: [
                'jd_wxShareActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 集卡抽奖通用活动',
            Script: 'KingRan_KR/jd_wxCollectCard.js',
            ListenEnv: [
                'jd_wxCollectCard_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 邀请赢大礼',
            Script: 'KingRan_KR/jd_prodev.py',
            ListenEnv: [
                'yhyauthorCode',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 知识超人',
            Script: 'KingRan_KR/jd_wxKnowledgeActivity.js',
            ListenEnv: [
                'jd_wxKnowledgeActivity_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 购物车锦鲤通用活动',
            Script: 'KingRan_KR/jd_wxCartKoi.js',
            ListenEnv: [
                'jd_wxCartKoi_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 读秒拼手速通用活动',
            Script: 'KingRan_KR/jd_wxSecond.js',
            ListenEnv: [
                'jd_wxSecond_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 店铺礼包特效',
            Script: 'KingRan_KR/jd_wxShopGift.js',
            ListenEnv: [
                'jd_wxShopGift_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 邀请入会赢好礼（京耕）',
            Script: 'KingRan_KR/jd_jinggeng_showInviteJoin.js',
            ListenEnv: [
                'jd_showInviteJoin_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 微定制瓜分福袋-加密',
            Script: 'KingRan_KR/jd_wdzfd.js',
            ListenEnv: [
                'jd_wdzfd_activityId',
                'jd_wdzfd_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 微定制瓜分京豆-加密',
            Script: ' KingRan_KR/jd_wdz.js',
            ListenEnv: [
                'jd_wdz_activityId',
                'jd_wdz_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 收藏大师-幸运抽奖',
            Script: 'KingRan_KR/jd_txzj_lottery.js',
            ListenEnv: [
                'jd_lottery_activityUr',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 收藏大师-关注商品',
            Script: 'KingRan_KR/jd_txzj_collect_shop.js',
            ListenEnv: [
                'jd_collect_shop_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 收藏大师-关注有礼',
            Script: 'KingRan_KR/jd_txzj_collect_item.js',
            ListenEnv: [
                'jd_collect_item_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 收藏大师-加购有礼',
            Script: 'KingRan_KR/jd_txzj_cart_item.js',
            ListenEnv: [
                'jd_cart_item_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 加购有礼（lzkj_loreal）',
            Script: 'KingRan_KR/jd_lzkj_loreal_cart.js',
            ListenEnv: [
                'jd_lzkj_loreal_cart_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 幸运抽奖（lzkj_loreal）',
            Script: 'KingRan_KR/jd_lzkj_loreal_draw.js',
            ListenEnv: [
                'jd_lzkj_loreal_draw_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 关注有礼（lzkj_loreal）',
            Script: 'KingRan_KR/jd_lzkj_loreal_followShop.js',
            ListenEnv: [
                'jd_lzkj_loreal_followShop_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] 邀请有礼（lzkj_loreal）',
            Script: 'KingRan_KR/jd_lzkj_loreal_invite.js',
            ListenEnv: [
                'jd_lzkj_loreal_invite_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] CJ组队瓜分京豆-加密',
            Script: 'KingRan_KR/jd_cjzdgf.js',
            ListenEnv: [
                'jd_cjhy_activityId',
                'jd_cjhy_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] CJ每日抢好礼通用活动',
            Script: 'KingRan_KR/jd_cjdaily.js',
            ListenEnv: [
                'jd_cjdaily_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] LZ组队瓜分京豆-加密',
            Script: 'KingRan_KR/jd_zdjr.js',
            ListenEnv: [
                'jd_zdjr_activityId',
                'jd_zdjr_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] LZ刮刮乐抽奖通用活动',
            Script: 'KingRan_KR/jd_drawCenter.js',
            ListenEnv: [
                'jd_drawCenter_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] LZ每日抢好礼通用活动',
            Script: 'KingRan_KR/jd_daily.js',
            ListenEnv: [
                'jd_daily_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] LZ店铺游戏',
            Script: 'KingRan_KR/jd_wxgame.js',
            ListenEnv: [
                'jd_wxgame_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] LZ让福袋飞',
            Script: 'KingRan_KR/jd_wxUnPackingActivity.js',
            ListenEnv: [
                'jd_wxUnPackingActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[KR] LZ盖楼有礼',
            Script: 'KingRan_KR/jd_wxBuildActivity.js',
            ListenEnv: [
                'jd_wxBuildActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M幸运抽奖',
            Script: 'walle1798_WALL.E/m_jd_wx_luckDraw.js',
            ListenEnv: [
                'M_WX_LUCK_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M组队瓜分',
            Script: 'walle1798_WALL.E/m_jd_wx_team.js',
            ListenEnv: [
                'M_WX_TEAM_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M关注有礼无线',
            Script: 'walle1798_WALL.E/m_jd_wx_shopGift.js',
            ListenEnv: [
                'M_WX_SHOP_GIFT_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M分享有礼',
            Script: 'walle1798_WALL.E/m_jd_wx_share.js',
            ListenEnv: [
                'M_WX_SHARE_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ]M读秒手速',
            Script: 'walle1798_WALL.E/m_jd_wx_secondDraw.js',
            ListenEnv: [
                'M_WX_SECOND_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M等级/生日礼包',
            Script: 'walle1798_WALL.E/m_jd_wx_levelBirth.js',
            ListenEnv: [
                'M_WX_LEVEL_BIRTH_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M知识超人',
            Script: 'walle1798_WALL.E/m_jd_wx_knowledge.js',
            ListenEnv: [
                'M_WX_KNOWLEDGE_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M关注抽奖',
            Script: 'walle1798_WALL.E/m_jd_wx_followDraw.js',
            ListenEnv: [
                'M_WX_FOLLOW_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M无线游戏',
            Script: 'walle1798_WALL.E/m_jd_wx_game.js',
            ListenEnv: [
                'M_WX_GAME_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M完善有礼',
            Script: 'walle1798_WALL.E/m_jd_wx_completeDraw.js',
            ListenEnv: [
                'M_WX_COMPLETE_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M集卡抽奖',
            Script: 'walle1798_WALL.E/m_jd_wx_collectCard.js',
            ListenEnv: [
                'M_WX_COLLECT_CARD_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M老虎机抽奖',
            Script: 'walle1798_WALL.E/m_jd_wx_centerDraw.js',
            ListenEnv: [
                'M_WX_CENTER_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M盖楼领奖',
            Script: 'walle1798_WALL.E/m_jd_wx_buildDraw.js',
            ListenEnv: [
                'M_WX_BUILD_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M加购有礼',
            Script: 'walle1798_WALL.E/m_jd_wx_addCart.js',
            ListenEnv: [
                'M_WX_ADD_CART_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M关注有礼',
            Script: 'walle1798_WALL.E/m_jd_follow_shop.js',
            ListenEnv: [
                'M_FOLLOW_SHOP_ARGV',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M收藏有礼',
            Script: 'walle1798_WALL.E/m_jd_fav_shop_gift.js',
            ListenEnv: [
                'M_FAV_SHOP_ARGV',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M粉丝红包',
            Script: 'walle1798_WALL.E/m_jd_fans_redPackt.js',
            ListenEnv: [
                'M_FANS_RED_PACKET_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[MJ] M打豆豆',
            Script: 'walle1798_WALL.E/m_jd_wx_dadoudou.js',
            ListenEnv: [
                'M_WX_DADOUDOU_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 店铺特效关注有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxShopGift.py',
            ListenEnv: [
                'jd_wxShopGiftId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 关注店铺有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxShopFollow.py',
            ListenEnv: [
                'jd_wxShopFollowId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 完善信息有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxCompleteInfo.py',
            ListenEnv: [
                'jd_wxCompleteInfoId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 加购有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxCollectionActivity.py',
            ListenEnv: [
                'jd_wxCollectionActivityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 盖楼有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxBulidActivity.py',
            ListenEnv: [
                'jd_wxBulidActivityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 生日等级礼包-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxBirthGifts.py',
            ListenEnv: [
                'jd_wxBirthGiftsId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 微定制组队瓜分-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wdz.py',
            ListenEnv: [
                'jd_wdz_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 关注有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_shopFollowGift.py',
            ListenEnv: [
                'jd_shopFollowGiftId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 店铺会员礼包-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_shopCollectGift.py',
            ListenEnv: [
                'jd_shopCollectGiftId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 店铺抽奖-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_dpcj.py',
            ListenEnv: [
                'DPCJID',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】CJ组队瓜分',
            Script: 'feverrun_my_scripts/jd_cjzdgf.js',
            ListenEnv: [
                'jd_cjhy_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】微定制',
            Script: 'feverrun_my_scripts/jd_wdz.js',
            ListenEnv: [
                'jd_wdz_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】微定制-开福袋',
            Script: 'feverrun_my_scripts/jd_wdz_openLuckBag.js',
            ListenEnv: [
                'jd_wdz_openLuckBag_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】分享有礼',
            Script: 'feverrun_my_scripts/jd_wxShareActivity.js',
            ListenEnv: [
                'jd_wxShareActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】购物车锦鲤通用活动',
            Script: 'feverrun_my_scripts/jd_wxCartKoi.js',
            ListenEnv: [
                'jd_wxCartKoi_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】集卡抽奖通用活动',
            Script: 'feverrun_my_scripts/jd_wxCollectCard.js',
            ListenEnv: [
                'jd_wxCollectCard_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】粉丝互动通用活动',
            Script: 'feverrun_my_scripts/jd_wxFansInterActionActivity.js',
            ListenEnv: [
                'jd_wxFansInterActionActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】读秒拼手速',
            Script: 'feverrun_my_scripts/jd_wxSecond.js',
            ListenEnv: [
                'jd_wxSecond_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '让福袋飞',
            Script: 'feverrun_my_scripts/jd_wxUnPackingActivity.js',
            ListenEnv: [
                'jd_wxUnPackingActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】LZ组队瓜分',
            Script: 'feverrun_my_scripts/jd_zdjr.js',
            ListenEnv: [
                'jd_zdjr_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy完善信息',
            Script: 'feverrun_my_scripts/jd_cjhy_completeInfoActivity.js',
            ListenEnv: [
                'jd_cjhy_completeInfoActivity_Ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy每日抢',
            Script: 'feverrun_my_scripts/jd_cjhy_daily.js',
            ListenEnv: [
                'jd_cjhy_daily_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy七日签到',
            Script: 'feverrun_my_scripts/jd_cjhy_sevenDay.js',
            ListenEnv: [
                'jd_cjhy_sevenDay_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy签到有礼',
            Script: 'feverrun_my_scripts/jd_cjhy_signActivity.js',
            ListenEnv: [
                'jd_cjhy_signActivity_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy加购物车抽奖',
            Script: 'feverrun_my_scripts/jd_cjhy_wxCollectionActivity.js',
            ListenEnv: [
                'jd_cjhy_wxCollectionActivityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy幸运抽奖',
            Script: 'feverrun_my_scripts/jd_cjhy_wxDrawActivity.js',
            ListenEnv: [
                'jd_cjhy_wxDrawActivity_Id',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy游戏活动',
            Script: 'feverrun_my_scripts/jd_cjhy_wxGameActivity.js',
            ListenEnv: [
                'jd_cjhy_wxGameActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy知识超人',
            Script: 'feverrun_my_scripts/jd_cjhy_wxKnowledgeActivity.js',
            ListenEnv: [
                'jd_cjhy_wxKnowledgeActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy生日礼',
            Script: 'feverrun_my_scripts/jd_cjhy_wxMcLevelAndBirthGifts.js',
            ListenEnv: [
                'jd_cjhy_wxMcLevelAndBirthGifts_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy关注店铺有礼',
            Script: 'feverrun_my_scripts/jd_cjhy_wxShopFollowActivity.js',
            ListenEnv: [
                'jd_cjhy_wxShopFollowActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】cjhy店铺礼包',
            Script: 'feverrun_my_scripts/jd_cjhy_wxShopGift.js',
            ListenEnv: [
                'jd_cjhy_wxShopGift_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】通用大牌联合开卡',
            Script: 'feverrun_my_scripts/jd_opencardDPLHTY.js',
            ListenEnv: [
                'DPLHTY',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】店铺抽奖-刮刮乐',
            Script: 'feverrun_my_scripts/jd_drawCenter.js',
            ListenEnv: [
                'jd_drawCenter_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj每日抢',
            Script: 'feverrun_my_scripts/jd_lzkj_daily.js',
            ListenEnv: [
                'jd_lzkj_daily_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj七日签到',
            Script: 'feverrun_my_scripts/jd_lzkj_sevenDay.js',
            ListenEnv: [
                'jd_lzkj_sevenDay_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj签到有礼',
            Script: 'feverrun_my_scripts/jd_lzkj_signActivity2.js',
            ListenEnv: [
                'jd_lzkj_signActivity2_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj盖楼有礼',
            Script: 'feverrun_my_scripts/jd_lzkj_wxBuildActivity.js',
            ListenEnv: [
                'jd_lzkj_wxBuildActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj加购物车抽奖',
            Script: 'feverrun_my_scripts/jd_lzkj_wxCollectionActivity.js',
            ListenEnv: [
                'jd_lzkj_wxCollectionActivityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj幸运抽奖',
            Script: 'feverrun_my_scripts/jd_lzkj_wxDrawActivity.js',
            ListenEnv: [
                'jd_lzkj_wxDrawActivity_Id',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj游戏活动',
            Script: 'feverrun_my_scripts/jd_lzkj_wxGameActivity.js',
            ListenEnv: [
                'jd_lzkj_wxGameActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj知识超人',
            Script: 'feverrun_my_scripts/jd_lzkj_wxKnowledgeActivity.js',
            ListenEnv: [
                'jd_lzkj_wxKnowledgeActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj关注店铺有礼',
            Script: 'feverrun_my_scripts/jd_lzkj_wxShopFollowActivity.js',
            ListenEnv: [
                'jd_lzkj_wxShopFollowActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj店铺礼包',
            Script: 'feverrun_my_scripts/jd_lzkj_wxShopGift.js',
            ListenEnv: [
                'jd_lzkj_wxShopGift_ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj_interactsaas加购有礼',
            Script: 'feverrun_my_scripts/jd_lzkj_interactsaas_jgyl.js',
            ListenEnv: [
                'jd_lzkj_interactsaas_jgyl_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj_interactsaas盖楼有礼',
            Script: 'feverrun_my_scripts/jd_lzkj_interactsaas_glyl.js',
            ListenEnv: [
                'jd_lzkj_interactsaas_glyl_Ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj_interactsaas日历签到',
            Script: 'feverrun_my_scripts/jd_lzkj_interactsaas_rlqd.js',
            ListenEnv: [
                'jd_lzkj_interactsaas_rlqd_Ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj_interactsaas签到',
            Script: 'feverrun_my_scripts/jd_lzkj_interactsaas_qrqd.js',
            ListenEnv: [
                'jd_lzkj_interactsaas_qrqd_Ids',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj_interactsaas邀请好友入会',
            Script: 'feverrun_my_scripts/jd_lzkj_interactsaas_yqhyrh.js',
            ListenEnv: [
                'jd_lzkj_interactsaas_yqhyrh_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj_interactsaas关注店铺有礼',
            Script: 'feverrun_my_scripts/jd_lzkj_interactsaas_gzyl.js',
            ListenEnv: [
                'jd_lzkj_interactsaas_gzyl_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】lzkj_interactsaas关注商品有礼',
            Script: 'feverrun_my_scripts/jd_lzkj_interactsaas_gzspyl.js',
            ListenEnv: [
                'jd_lzkj_interactsaas_gzspyl_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境lzkj邀请入会有礼',
            Script: 'feverrun_my_scripts/jd_lzkj_interact_yqrhyl.js',
            ListenEnv: [
                'jd_lzkj_interact_yqrhyl_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】LZ店铺通用游戏任务',
            Script: 'feverrun_my_scripts/jd_wxgame.js',
            ListenEnv: [
                'WXGAME_ACT_ID',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】入会开卡领取礼包通用',
            Script: 'feverrun_my_scripts/jd_card_force.js',
            ListenEnv: [
                'VENDER_ID',//export VENDER_ID="xxx"      入会开卡Id  export OPENCARD_BEAN="xx"   最低多少豆入会
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】txzj 关注有礼',
            Script: 'feverrun_my_scripts/jd_txzj_collect_item.js',
            ListenEnv: [
                'jd_txzj_collect_item_id',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】txzj 加购有礼',
            Script: 'feverrun_my_scripts/jd_txzj_cart_item.js',
            ListenEnv: [
                'jd_txzj_cart_item_id',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】txzj 签到',
            Script: 'feverrun_my_scripts/jd_txzj_sign_in.js',
            ListenEnv: [
                'jd_txzj_sign_in_id',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【保护环境】txzj抽奖',
            Script: 'feverrun_my_scripts/jd_txzj_lottery.js',
            ListenEnv: [
                'jd_txzj_lottery_id',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
    ],
    /* 监控列表 */
    ListenList: [
        {
            Name: 'tgM线报群',
            Id: '-1001654299303',
        },
        {
            Name: '来薅线报通知',
            Id: '-1001749005484',
        },
        {
            Name: 'Tg顺丰快递',
            Id: '-1001841389846',
        }
    ],

    //非静默触发消息多少秒撤回 0不撤回
    delMsgWaitTime: 10,
    //静默功能  默认false,会在监听到消息的地方回复监听结果 true则推送到静默推送设置的地方
    Taboo: true,
    TabooOriginalMsg: false /* 静默后推送的消息是否显示触发消息 */,
    //1 禁用任何日志输出 改为true后,不会向社交平台推送任何消息,且2 3开关失效 控制台除外
    DisableAllLogs: false,
    //2 禁用错误日志输出 改为true后,不会向社交平台推送任何错误消息 控制台除外
    DisableErrLogs: false,
    //3 禁用正常运行日志输出 改为true后,不会向社交平台推送任何任务运行成功的消息 控制台除外
    DisableRunLogs: false,
    //4 禁用控制台日志 改为true后,控制台不会显示任何消息
    DisableConsoleLog: false,
    //队列模式 1先进先出  2先进后出  其他值均视为 先进先出
    ListMode: 2,
    /* 运行日志输出位置,例如错误运行日志/任务运行成功等日志,只能设置1个 */
    runLogsInfo: {
        platform: 'HumanTG', //发送平台
        toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
        Id: '-983627023', //个人id 或群id
    },
    /* 静默后监控结果输出位置  可填多个*/
    TabooLogsInfo: [
        // 	{
        // 	platform: "qqBot",
        // 	toGroupOrUser: "userId",   //通知类型,个人userId //群groupId
        // 	Id: "528006323"
        // },
         {
             platform: '', //发送平台
             toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
             Id: '', //个人id 或群id
         },
    ],
};


module.exports = {
    RspyList,
};
