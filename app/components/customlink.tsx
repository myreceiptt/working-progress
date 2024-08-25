import Link from "next/link";

export default function CustomLink(props: any) {
  const href = props.href;
  const isInternalLink = href && href.startsWith("/");
  const isImageLink = href && href.startsWith("/images");

  if (isInternalLink && !isImageLink) {
    return <Link href={href}>{props.children}</Link>;
  }

  return <a target="_blank" {...props} />;
}
