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

export interface TeamSitesOnly {
    displayName: string;
    coachCode: string;
    coachRole: string;
    teamCode: string;
    teamTricode: string;
}

export interface Coach{
    firstName: string;
    lastName: string;
    isAssistant: boolean;
    personId: string;
    teamId: string;
    sortSequence: string;
    college: string;
    teamSitesOnly: TeamSitesOnly;
}

export interface League {
    standard: Coach[];
}

export interface CoachReponse {
    _internal: Internal;
    league: League;
}