import type { Documentation } from '../documentation-common/Documentation';

const commonDocs: ReadonlyArray<Documentation> = [
  {
    type: 'text-only',
    title: 'Introduction',
    text: [
      'One of the most common parts of an application is its authentication & authorization solution. During the pandemic, I had quite a bit of time on my hands, so I decided to write my own OAuth2 authorization server from scratch. I read the entire RFC specification and followed it to the letter, implementing a fully compliant OAuth2 solution supporting multiple grant types, including the ever-important authorization code flow.',
      'Ultimately I retired this project in favor of moving to an off-the-shelf solution (Keycloak) for my ecosystem. However, it was a really enjoyable project for the time that I had it.'
    ]
  }
];

export const placeholderDocs: ReadonlyArray<Documentation> = [
  ...commonDocs,
  {
    type: 'text-only',
    title: 'More Details Coming Soon...',
    text: []
  }
];

export const fullDocs: ReadonlyArray<Documentation> = [...commonDocs];
