import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Newsletter } from "@/components";
import { WelcomeVideo } from "@/components/WelcomeVideo";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row
        as="section"
        aria-label="Portada"
        className="lc-section-green"
        fillWidth
        radius="xl"
        padding="xl"
        gap="40"
        vertical="center"
        s={{ direction: "column", padding: "24", gap: "32" }}
      >
        <Column flex={1} horizontal="start" align="left" s={{ horizontal: "center", align: "center" }}>
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="start"
              paddingBottom="32"
              s={{ horizontal: "center" }}
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16" s={{ horizontal: "center" }}>
            <Heading wrap="balance" variant="display-strong-m">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={200} fillWidth horizontal="start" paddingBottom="32" s={{ horizontal: "center" }}>
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={400} horizontal="start" s={{ horizontal: "center" }}>
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                    aria-hidden
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
        <RevealFx
          delay={300}
          horizontal="center"
          style={{ flex: "0 0 auto", width: "min(18rem, 100%)" }}
        >
          <WelcomeVideo
            src="/videos/video-saludo.mp4"
            label={`Video de saludo de ${person.name}`}
            fallbackInitial={person.firstName.charAt(0)}
          />
        </RevealFx>
      </Row>
      <RevealFx translateY="16" delay={600}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row
            fillWidth
            gap="24"
            marginTop="40"
            s={{ direction: "column", marginTop: "16", gap: "8" }}
          >
            <Row
              flex={1}
              paddingLeft="l"
              paddingTop="24"
              s={{ paddingLeft: "16", paddingTop: "8" }}
            >
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20" s={{ paddingX: "0" }}>
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2]} />
      <Newsletter />
    </Column>
  );
}
