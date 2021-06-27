import { Emoji } from 'emoji-mart';

const PostEmoji = ({ src, size = 24 }) => {
  return <Emoji emoji={src} size={size} />;
};

export default PostEmoji;
