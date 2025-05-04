export default function ProfileBio({ bio }: { bio?: string | null }) {
  return (
    <div className="text-sm">
      <p>{bio}</p>
    </div>
  );
}
