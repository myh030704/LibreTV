// 全局常量配置
const PROXY_URL = '/proxy/';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',
    verificationTTL: 90 * 24 * 60 * 60 * 1000
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {

    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛资源'
    },

    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源'
    },

    ffzy: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡资源'
    },

    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源'
    },

    wolong: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源'
    },

    sdzy: {
        api: 'https://sdzyapi.com/api.php/provide/vod',
        name: '闪电资源'
    },

    kczy: {
        api: 'https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源'
    },

    guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源'
    },

    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'IKUN资源'
    },

    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '索尼资源'
    },

    wujin: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: '无尽资源'
    },

    yayazy: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: '丫丫资源'
    },

    uku: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源'
    },

    hhzy: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华资源'
    },

    jszy: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源'
    },

    qhzy: {
        api: 'https://caiji.qhzyapi.com/api.php/provide/vod',
        name: '奇虎资源'
    },

    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: '魔都资源'
    },

    xinlang: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源'
    },

    kuaikan: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod',
        name: '快看资源'
    },

    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: '虎牙资源'
    },

    tiankong: {
        api: 'http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空资源'
    },

    haiwaikan: {
        api: 'https://haiwaikan.com/api.php/provide/vod',
        name: '海外看资源'
    },

    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },

    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源'
    },

    feisu: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod',
        name: '飞速资源'
    },

    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '牛牛资源'
    }

};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;

// 聚合搜索配置
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,
    timeout: 8000,
    maxResults: 1000,
    parallelRequests: true,
    showSourceBadges: true
};

// API请求配置
const API_CONFIG = {
    search: {
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 5,
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'application/json'
        }
    },

    detail: {
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Accept': 'application/json'
        }
    }
};

// M3U8匹配
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 自定义播放器
const CUSTOM_PLAYER_URL = 'player.html';

// 播放器配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,
    filterAds: true,
    autoPlayNext: true,
    adFilteringEnabled: true,
    adFilteringStorage: 'adFilteringEnabled'
};

// 错误信息
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 安全配置
const SECURITY_CONFIG = {
    enableXSSProtection: true,
    sanitizeUrls: true,
    maxQueryLength: 100
};

// 自定义API配置
const CUSTOM_API_CONFIG = {
    separator: ',',
    maxSources: 5,
    testTimeout: 5000,
    namePrefix: 'Custom-',
    validateUrl: true,
    cacheResults: true,
    cacheExpiry: 5184000000,
    adultPropName: 'isAdult'
};

// 是否隐藏成人API
const HIDE_BUILTIN_ADULT_APIS = false;
