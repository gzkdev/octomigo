export default function ProfileBio({ bio }: { bio?: string | null }) {
  return (
    <div className="space-y-4">
      <div className="font-medium">About</div>
      <p>{bio}</p>
    </div>
  );
}
