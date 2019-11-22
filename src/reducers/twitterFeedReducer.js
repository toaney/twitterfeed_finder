const INITIAL_STATE = {
    keyword: "",
    handle: "",
    statuses: [
        "RT @agodgmt: GOLDEN🏅MONEY💲TEAM 🤝 PRESENTS\n📺YOUTUBE📺 🚨ALERT🚨Subscribe to @TrillWillIsrael YouTube Channel\n.\n.\n.\n#goldenmoneyteam #agodgmt #1…",
        "RT @agodgmt: Golden🏅 Money💲Team 🤝 Presents\n🎶GOOD MUSIC🎶🚨ALERT🚨\n@TrillWillIsrael - Come Get It\n.\n.\n#goldenmoneyteam #AgodGmt #VueJS  #100Day…",
        "RT @agodgmt: Golden🏅 Money💲Team 🤝 Presents\n💲GRIND MUSIC💲🚨ALERT🚨\n@TrillWillIsrael - Lay Low \n.\n.\n#goldenmoneyteam #AgodGmt #VueJS 💲 #100Days…"
    ]
};

const twitterFeedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE_STATUSES":
            return{
                ...state,
                statuses: action.statuses
            }
        case "UPDATE_HANDLE": 
            return{
                ...state,
                handle: action.handle
            }
        case "UPDATE_KEYWORD":
            return{
                ...state,
                keyword: action.keyword
            }
        default:
            return state
    }
};

export default twitterFeedReducer;