import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import List from 'components/core/List';
import MailIconSVG from 'assets/mail.svg';
import GithubIconSVG from 'assets/github.svg';
import LinkedInIconSvg from 'assets/linkedin.svg';
import OldSchoolMacJPG from 'assets/mac-old-school.jpg';
import Container from 'components/core/Container';

function Footer() {
  const { t } = useTranslation();

  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.Aside><img src={OldSchoolMacJPG} alt="Hello" /></Styled.Aside>
        <Styled.Lists>
          <List
            header={t('footer.overview.header')}
            elements={[
              { label: t('footer.overview.home'), scrollTo: 'Home' },
              { label: t('footer.overview.projects'), scrollTo: 'Projects' },
              { label: t('footer.overview.contactMe'), scrollTo: 'Contact' },
            ]}
            isVertical
          />
          <List
            header={t('footer.explore.header')}
            elements={[
              { label: t('projects.emotion.name'), to: 'https://emotion.miami/' },
              { label: t('projects.winamp.name'), to: 'https://winamp.vercel.app' },
              { label: t('projects.harmonia.name'), to: 'https://harmonia-orpin.vercel.app/' },
            ]}
            isVertical
          />
          <List
            header={t('footer.findMe.header')}
            elements={[
              { label: t('footer.findMe.github'), icon: GithubIconSVG, to: 'https://github.com/energywraith' },
              { label: t('footer.findMe.linkedin'), icon: LinkedInIconSvg, to: 'https://www.linkedin.com/in/adam-jalocha/' },
              { label: t('footer.findMe.mail'), icon: MailIconSVG, to: 'mailto:jalochadev@gmail.com' },
            ]}
            isVertical
          />
        </Styled.Lists>
        <Styled.Copyright>
          {t('footer.copyright', { year: new Date().getFullYear(), name: t('name') })}
          <Styled.NoWrap>{t('footer.madeWithLove')}</Styled.NoWrap>
        </Styled.Copyright>
      </Styled.Container>
    </Styled.Footer>
  );
}

const Styled = {
  Footer: styled.footer`
    color: ${({ theme }) => theme.colors.white};
    padding-top: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: ${({ theme }) => theme.layers.background};
      box-shadow: 0 0 2px #0f1012;
      background: #0f1012;
    }
  `,
  Container: styled(Container)`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  Aside: styled.aside`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    
    img {
      position: relative;
      top: -25%;
      right: -25%;
      height: 200%;
      z-index: ${({ theme }) => theme.layers.background};

      opacity: 0.1;
      @media (min-width: 1200px) {
        opacity: 1;
      }
    }
  `,
  Lists: styled.div`
    display: flex;
    padding: 20px 0;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 60px;
  `,
  Copyright: styled.div`
    padding: 12px 0 30px 0;
    opacity: 0.8;
    text-align: center;
    align-self: flex-start;
    margin-top: 12px;
    width: 100%;
    line-height: 28px;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      text-align: start;
    }
  `,
  NoWrap: styled.span`
    white-space: nowrap;
  `,
};

export default Footer;
