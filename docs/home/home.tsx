import emojilib from '@lobehub/emojilib';
import { FluentEmoji, getEmojiNameByCharacter } from '@lobehub/fluent-emoji';
import {
  AgentSkillCard,
  InstallBanner,
  LandingHero,
  LandingSection,
  LogoMarquee,
} from '@lobehub/ui/awesome';
import { GithubIcon } from '@lobehub/ui/icons';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

import Dashboard from '../components/Dashboard';
import { BentoGallery } from './BentoGallery';
import { CodeShowcaseSection } from './CodeShowcase';
import { FeatureSection } from './FeatureSection';
import { formatEmojiName } from './emojis';
import { renderLink } from './renderLink';

const SITE_URL = 'https://fluent-emoji.lobehub.com';
const INSTALL_COMMAND = 'bun add @lobehub/fluent-emoji';
const COMPONENT_PATHNAME = '/components/fluent-emoji';
const EMOJI_COUNT = Object.keys(emojilib).length.toLocaleString('en-US');

const MARQUEE_EMOJIS = ['😀', '🚀', '🎉', '🦄', '🔥', '🧠', '🌈', '🍕', '🐱', '💡', '🎨', '👋'];

const MARQUEE_ITEMS = MARQUEE_EMOJIS.map((emoji) => ({
  icon: <FluentEmoji emoji={emoji} size={24} type={'3d'} />,
  label: formatEmojiName(getEmojiNameByCharacter(emoji)),
}));

export default function Home({
  description,
  getStartedPathname,
}: {
  description: string;
  getStartedPathname: string;
}) {
  const navigate = useNavigate();
  return (
    <>
      <LandingHero
        accent="for React"
        actions={[
          {
            href: getStartedPathname,
            icon: ArrowRight,
            iconPlacement: 'end',
            label: 'Get Started',
            primary: true,
          },
          { href: 'https://github.com/lobehub/fluent-emoji', icon: GithubIcon, label: 'GitHub' },
        ]}
        aside={
          <AgentSkillCard
            agent={{
              code: `Read ${SITE_URL}/skills.md and follow it to render emoji with @lobehub/fluent-emoji.`,
              description:
                'Send this prompt to your agent to use the right component and utilities',
            }}
            footer={
              <>
                <a href="/skills.md" rel="noreferrer" target="_blank">
                  skills.md
                </a>
                <a href="/llms.txt" rel="noreferrer" target="_blank">
                  llms.txt
                </a>
              </>
            }
          />
        }
        badge={
          <a href="/skills.md" rel="noreferrer" target="_blank">
            New · skills.md and llms.txt for coding agents →
          </a>
        }
        description={<span data-pagefind-meta="description">{description}</span>}
        onNavigate={navigate}
        renderLink={renderLink}
        title={<span data-pagefind-meta="title">Fluent Emoji</span>}
      >
        <LogoMarquee
          caption={
            <Link to={COMPONENT_PATHNAME}>{EMOJI_COUNT} emoji in five styles, one component</Link>
          }
          iconSize={24}
          items={MARQUEE_ITEMS}
        />
      </LandingHero>

      <LandingSection
        actions={[
          {
            href: COMPONENT_PATHNAME,
            icon: ArrowRight,
            iconPlacement: 'end',
            label: 'Component docs',
          },
        ]}
        description="Every tile below is a live FluentEmoji render, not a screenshot."
        eyebrow="Showcase"
        eyebrowColor="blue"
        id="home-gallery"
        onNavigate={navigate}
        renderLink={renderLink}
        title="One emoji, five styles"
      >
        <BentoGallery />
      </LandingSection>

      <LandingSection
        actions={[{ href: '/components/get-fluent-emoji-cdn', label: 'CDN utilities' }]}
        description="Switch tabs — each snippet on the left renders live on the right."
        eyebrow="Developer experience"
        eyebrowColor="green"
        id="home-showcase"
        onNavigate={navigate}
        renderLink={renderLink}
        title="Code you write, emoji you get"
      >
        <CodeShowcaseSection />
      </LandingSection>

      <LandingSection
        actions={[{ href: '/components/get-emoji-by-character', label: 'Emoji utilities' }]}
        description="Small surface, sensible defaults, no assets in your bundle."
        eyebrow="Foundations"
        eyebrowColor="orange"
        id="home-features"
        onNavigate={navigate}
        renderLink={renderLink}
        title="Everything an emoji needs"
      >
        <FeatureSection />
      </LandingSection>

      <LandingSection
        description={`Search all ${EMOJI_COUNT} emoji by keyword, switch styles and copy the CDN URL.`}
        eyebrow="Gallery"
        eyebrowColor="purple"
        id="home-emoji-gallery"
        title="Find any emoji"
      >
        <Dashboard />
      </LandingSection>

      <InstallBanner
        command={INSTALL_COMMAND}
        footnote={
          <>
            Open source · MIT license · <Link to={getStartedPathname}>Get Started →</Link>
          </>
        }
        title="Bring Fluent Emoji to your app"
      />
    </>
  );
}
