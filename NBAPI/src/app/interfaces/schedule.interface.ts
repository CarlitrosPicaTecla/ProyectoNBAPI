export interface Internal {
    pubDateTime: string;
    igorPath: string;
    xslt: string;
    xsltForceRecompile: string;
    xsltInCache: string;
    xsltCompileTimeMillis: string;
    xsltTransformTimeMillis: string;
    consolidatedDomKey: string;
    endToEndTimeMillis: string;
}

export interface Period {
    current: number;
    type: number;
    maxRegular: number;
}

export interface Nugget {
    text: string;
}

export interface HTeam {
    teamId: string;
    score: string;
    win: string;
    loss: string;
}

export interface VTeam {
    teamId: string;
    score: string;
    win: string;
    loss: string;
}

export interface Broadcaster {
    shortName: string;
    longName: string;
}

export interface National {
    broadcasters: Broadcaster[];
}

export interface Canadian {
    shortName: string;
    longName: string;
}

export interface Video {
    regionalBlackoutCodes: string;
    isLeaguePass: boolean;
    isNationalBlackout: boolean;
    isTNTOT: boolean;
    canPurchase: boolean;
    isVR: boolean;
    isNextVR: boolean;
    isNBAOnTNTVR: boolean;
    isMagicLeap: boolean;
    isOculusVenues: boolean;
    national: National;
    canadian: Canadian[];
    spanish_national: any[];
}

export interface Broadcast {
    video: Video;
}

export interface Watch {
    broadcast: Broadcast;
}

export interface Standard {
    gameId: string;
    seasonStageId: number;
    gameUrlCode: string;
    statusNum: number;
    extendedStatusNum: number;
    isStartTimeTBD: boolean;
    startTimeUTC: Date;
    startDateEastern: string;
    isNeutralVenue: boolean;
    startTimeEastern: string;
    isBuzzerBeater: boolean;
    period: Period;
    nugget: Nugget;
    hTeam: HTeam;
    vTeam: VTeam;
    watch: Watch;
}

export interface Period2 {
    current: number;
    type: number;
    maxRegular: number;
}

export interface Nugget2 {
    text: string;
}

export interface HTeam2 {
    teamId: string;
    score: string;
    win: string;
    loss: string;
}

export interface VTeam2 {
    teamId: string;
    score: string;
    win: string;
    loss: string;
}

export interface Broadcaster2 {
    shortName: string;
    longName: string;
}

export interface National2 {
    broadcasters: Broadcaster2[];
}

export interface Canadian2 {
    shortName: string;
    longName: string;
}

export interface Video2 {
    regionalBlackoutCodes: string;
    isLeaguePass: boolean;
    isNationalBlackout: boolean;
    isTNTOT: boolean;
    canPurchase: boolean;
    isVR: boolean;
    isNextVR: boolean;
    isNBAOnTNTVR: boolean;
    isMagicLeap: boolean;
    isOculusVenues: boolean;
    national: National2;
    canadian: Canadian2[];
    spanish_national: any[];
}

export interface Broadcast2 {
    video: Video2;
}

export interface Watch2 {
    broadcast: Broadcast2;
}

export interface Sacramento {
    gameId: string;
    seasonStageId: number;
    gameUrlCode: string;
    statusNum: number;
    extendedStatusNum: number;
    isStartTimeTBD: boolean;
    startTimeUTC: Date;
    startDateEastern: string;
    isNeutralVenue: boolean;
    startTimeEastern: string;
    isBuzzerBeater: boolean;
    period: Period2;
    nugget: Nugget2;
    tags: string[];
    hTeam: HTeam2;
    vTeam: VTeam2;
    watch: Watch2;
}

export interface Period3 {
    current: number;
    type: number;
    maxRegular: number;
}

export interface Nugget3 {
    text: string;
}

export interface HTeam3 {
    teamId: string;
    score: string;
    win: string;
    loss: string;
}

export interface VTeam3 {
    teamId: string;
    score: string;
    win: string;
    loss: string;
}

export interface Broadcaster3 {
    shortName: string;
    longName: string;
}

export interface National3 {
    broadcasters: Broadcaster3[];
}

export interface Canadian3 {
    shortName: string;
    longName: string;
}

export interface Video3 {
    regionalBlackoutCodes: string;
    isLeaguePass: boolean;
    isNationalBlackout: boolean;
    isTNTOT: boolean;
    canPurchase: boolean;
    isVR: boolean;
    isNextVR: boolean;
    isNBAOnTNTVR: boolean;
    isMagicLeap: boolean;
    isOculusVenues: boolean;
    national: National3;
    canadian: Canadian3[];
    spanish_national: any[];
}

export interface Broadcast3 {
    video: Video3;
}

export interface Watch3 {
    broadcast: Broadcast3;
}

export interface Vega {
    gameId: string;
    seasonStageId: number;
    gameUrlCode: string;
    statusNum: number;
    extendedStatusNum: number;
    isStartTimeTBD: boolean;
    startTimeUTC: Date;
    startDateEastern: string;
    isNeutralVenue: boolean;
    startTimeEastern: string;
    isBuzzerBeater: boolean;
    period: Period3;
    nugget: Nugget3;
    tags: string[];
    hTeam: HTeam3;
    vTeam: VTeam3;
    watch: Watch3;
}

export interface Period4 {
    current: number;
    type: number;
    maxRegular: number;
}

export interface Nugget4 {
    text: string;
}

export interface HTeam4 {
    teamId: string;
    score: string;
    win: string;
    loss: string;
}

export interface VTeam4 {
    teamId: string;
    score: string;
    win: string;
    loss: string;
}

export interface Broadcaster4 {
    shortName: string;
    longName: string;
}

export interface National4 {
    broadcasters: Broadcaster4[];
}

export interface Canadian4 {
    shortName: string;
    longName: string;
}

export interface Video4 {
    regionalBlackoutCodes: string;
    isLeaguePass: boolean;
    isNationalBlackout: boolean;
    isTNTOT: boolean;
    canPurchase: boolean;
    isVR: boolean;
    isNextVR: boolean;
    isNBAOnTNTVR: boolean;
    isMagicLeap: boolean;
    isOculusVenues: boolean;
    national: National4;
    canadian: Canadian4[];
    spanish_national: any[];
}

export interface Broadcast4 {
    video: Video4;
}

export interface Watch4 {
    broadcast: Broadcast4;
}

export interface Utah {
    gameId: string;
    seasonStageId: number;
    gameUrlCode: string;
    statusNum: number;
    extendedStatusNum: number;
    isStartTimeTBD: boolean;
    startTimeUTC: Date;
    startDateEastern: string;
    isNeutralVenue: boolean;
    startTimeEastern: string;
    isBuzzerBeater: boolean;
    period: Period4;
    nugget: Nugget4;
    tags: string[];
    hTeam: HTeam4;
    vTeam: VTeam4;
    watch: Watch4;
}

export interface League {
    standard: Standard[];
    africa: any[];
    sacramento: Sacramento[];
    vegas: Vega[];
    utah: Utah[];
}

export interface ScheduleResponse {
    _internal: Internal;
    league: League;
}