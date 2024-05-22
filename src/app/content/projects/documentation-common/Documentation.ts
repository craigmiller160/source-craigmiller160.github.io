import type { LinkListItem } from '../../../../ui/LinkList';

export type TextOnlyDocumentation = Readonly<{
  type: 'text-only';
  title: string;
  text: ReadonlyArray<string>;
}>;

export type LinksAndTextDocumentation = Readonly<{
  type: 'links-and-text';
  title: string;
  links: ReadonlyArray<LinkListItem>;
  text: ReadonlyArray<string>;
}>;

export type ImageOnlyDocumentation = Readonly<{
  type: 'image-only';
  title: string;
  image: string;
}>;

export type ImageAndTextDocumentation = Readonly<{
  type: 'image-and-text';
  title: string;
  image: string;
  text: ReadonlyArray<string>;
}>;

export type Documentation =
  | TextOnlyDocumentation
  | LinksAndTextDocumentation
  | ImageAndTextDocumentation
  | ImageOnlyDocumentation;

export type DocumentationType = Documentation['type'];
