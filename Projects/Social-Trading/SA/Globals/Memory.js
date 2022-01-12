exports.newSocialTradingGlobalsMemory = function () {
    /*
    Here is the Data we are going to keep in memory.
    */
    let thisObject = {
        maps: {
            USER_PROFILES_BY_SOCIAL_ENTITY_ID: new Map(),
            SOCIAL_PERSONAS_BY_ID: new Map(),                    
            SOCIAL_PERSONAS_BY_HANDLE: new Map(),
            SOCIAL_TRADING_BOTS_BY_ID: new Map(),                    
            SOCIAL_TRADING_BOTS_BY_HANDLE: new Map()              
        },
        arrays: {
        }
    }

    return thisObject
}