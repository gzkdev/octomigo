import useSWR from "swr";
import { useParams } from "react-router-dom";
import { UserProfile } from "../components";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Profile() {
  const params = useParams();
  const username = params.username;
  const { data: ProfileData, error: profileError } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  const { data: RepoData, error: repoError } = useSWR(
    `https://api.github.com/users/${username}/repos`,
    fetcher
  );

  return (
    <UserProfile
      user={ProfileData}
      data={RepoData}
      profileError={profileError}
      repoError={repoError}
    />
  );
}

export default Profile;
