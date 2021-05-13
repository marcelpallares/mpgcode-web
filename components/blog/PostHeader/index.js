import { HeaderContainer, PostTitle } from "./styles";
import LanguageSwitcher from "../../common/LanguageSwitcher";
import { getFormattedDate } from "../../../utils/dateUtils";

const PostHeader = ({ locale, post: { title, localizedSlug, date } = {} }) => {
  const formattedDate = getFormattedDate({ locale, date: new Date(date) });
  return (
    <HeaderContainer>
      <PostTitle>{title}</PostTitle>
      <div className="columns is-gapless is-mobile is-vcentered py-3 mb-0">
        <figure className="column is-narrow">
          <img
            src="/images/marcel/marcel-32.png"
            alt="Author picture"
            width="32"
            srcset="
              /images/marcel/marcel-32@3x.png 3x,
              /images/marcel/marcel-32@2x.png 2x,
              /images/marcel/marcel-32.png 1x
            "
          />
        </figure>
        <address className="author column mx-3">Marcel Pallarés</address>
      </div>
      <div className="columns is-gapless is-mobile is-vcentered">
        <div className="column">
          <time pubdate datetime={date}>
            {formattedDate}
          </time>
        </div>
        {localizedSlug && (
          <div className="column is-narrow">
            <LanguageSwitcher
              isPost
              locale={locale}
              destination={localizedSlug}
            />
          </div>
        )}
      </div>
    </HeaderContainer>
  );
};

export default PostHeader;
