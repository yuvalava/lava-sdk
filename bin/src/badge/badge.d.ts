import { GenerateBadgeResponse } from "./badge_pb";
export declare function fetchBadge(serverAddress: string, badgeUser: string, projectKey: string): Promise<GenerateBadgeResponse>;
