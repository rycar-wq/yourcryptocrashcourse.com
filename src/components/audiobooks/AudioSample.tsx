export default function AudioSample({
  title,
  filePath,
}: {
  title: string;
  filePath?: string;
}) {
  if (!filePath) return null;

  return (
    <div className="mt-10 mb-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        🎧 Listen to a Sample
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Hear a short preview from <span className="font-medium">{title}</span>.
      </p>
      <audio
        controls
        preload="none"
        className="w-full max-w-lg mx-auto rounded-lg"
        src={filePath}
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
