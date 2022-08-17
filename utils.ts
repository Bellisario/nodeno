import { ReleaseResponse } from './ReleaseResponse.ts';

const getLatestRelease = async (repo: string) => {
    const data = await fetchReleaseData(repo);
    const releases = getReleases(data);
    const versions = releases.map((release) => {
        return makeSemVer(release);
    });
    return getLatestVersion(versions);
};

const fetchReleaseData = async (repo: string): Promise<ReleaseResponse[]> => {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases`);
    const json = await res.json();
    return json;
};

const getReleases = (data: ReleaseResponse[]) => {
    const releases = data.map((release) => {
        return release.tag_name;
    });
    return releases;
};

const makeSemVer = (release: string) => {
    const semVer = release.replace(/^v/, '');
    return semVer;
};

const getLatestVersion = (versions: string[]) => {
    let best = '0.0.0';
    function compare(a: string, b: string) {
        const [aMajor, aMinor, aPatch] = a.split('.');
        const [bMajor, bMinor, bPatch] = b.split('.');
        if (aMajor > bMajor) {
            return 1;
        } else if (aMajor < bMajor) {
            return -1;
        } else {
            if (aMinor > bMinor) {
                return 1;
            } else if (aMinor < bMinor) {
                return -1;
            } else {
                if (aPatch > bPatch) {
                    return 1;
                } else if (aPatch < bPatch) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    }
    for (const version of versions) {
        if (compare(version, best) > 0) {
            best = version;
        }
    }
    return best;
};

export { getLatestRelease };
