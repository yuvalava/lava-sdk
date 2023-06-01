import { GenerateBadgeResponse } from "./badges_pb";
export declare function fetchBadge(serverAddress: string, badgeUser: string, projectKey: string): Promise<GenerateBadgeResponse>;
