// cspell:word commitish zipball

export interface ReleaseResponse {
    url: string;
    assets_url: string;
    upload_url: string;
    html_url: string;
    id: number;
    author: Author;
    node_id: string;
    tag_name: string;
    target_commitish: TargetCommitish;
    name: string;
    draft: boolean;
    prerelease: boolean;
    created_at: Date;
    published_at: Date;
    // deno-lint-ignore no-explicit-any
    assets: any[];
    tarball_url: string;
    zipball_url: string;
    body: string;
    reactions?: Reactions;
    mentions_count?: number;
}

interface Author {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: Type;
    site_admin: boolean;
}

enum Type {
    User = 'User',
}

interface Reactions {
    url: string;
    total_count: number;
    '+1': number;
    '-1': number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
}

enum TargetCommitish {
    Main = 'main',
    Master = 'master',
}
