import styled, { css } from "styled-components";
import Twitter from "../../public/twitter.svg";
import TwitterHover from "../../public/twitter-hover.svg";
import Instagram from "../../public/instagram.svg";
import InstagramHover from "../../public/instagram-hover.svg";
import Discord from "../../public/discord.svg";
import DiscordHover from "../../public/discord-hover.svg";

export const SocialMenuWrapp = styled.div((props) => {
  const { mediaQueries } = props.theme;

  return css`
    margin-top: auto;
    ul {
      display: flex;
      justify-content: center;

      ${mediaQueries.md} {
        justify-content: flex-start;
      }

      li {
        margin-right: 24px;

        a {
          display: flex;
          justify-content: flex-start;
        }
      }
    }
  `;
});

export const SocialIcon = styled.div(() => {
  return css`
    width: 30px;
    height: 30px;
    border-radius: 50%;

    &:after {
      content: "";
      position: absolute;
      height: 30px;
      width: 30px;
      transition: 0.3s;
    }
    &.twitter {
      &:after {
        background-image: url(${Instagram.src});
      }
      &:hover {
        &:after {
          background-image: url(${InstagramHover.src});
        }
      }
    }
    &.instagram {
      &:after {
        background-image: url(${Twitter.src});
      }
      &:hover {
        &:after {
          background-image: url(${TwitterHover.src});
        }
      }
    }
    &.discord {
      &:after {
        background-image: url(${Discord.src});
      }
      &:hover {
        &:after {
          background-image: url(${DiscordHover.src});
        }
      }
    }
  `;
});
