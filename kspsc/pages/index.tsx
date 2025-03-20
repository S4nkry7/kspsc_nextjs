import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {Card, CardBody, CardHeader, Divider} from "@heroui/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import ComunicadosWidget from "@/components/listado_pdf";



export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ComunicadosWidget  
          title="Comunicados Oficiales"
          subtitle="Información importante" 
          tagline="Mantente informado"
          id="comunicados"
          isDark={false} 
          classes={{ container: "custom-class" }} 
          bg = ""
        />
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50"
          shadow="sm"
        >
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">¿Quiénes somos?</p>
            </div>
          </CardHeader>

          <Divider />

          <CardBody>
            <p>
              Nuestra firma nace en el año de 1973, fecha a partir de la cual
              hemos venido prestando los servicios profesionales ya mencionados,
              tiempo durante el cual tuvimos oportunidad de asociarnos con otra
              firma de contadores públicos, asociación que culminó en junio de
              1987, fecha a partir de la cual tomamos nuestro actual nombre KSP,
              S. C.
            </p>

            <p>
              Durante este lapso, tuvimos la oportunidad de representar a una
              firma internacional de la contaduría pública y, al concluir esa
              representación, fuimos invitados a formar parte de un grupo de
              despachos con sedes básicamente en Europa, y en algunas otras
              sedes en ciudades importantes de los Estados Unidos de
              Norteamérica.
            </p>

            <p>
              Ambas relaciones fueron concluidas a instancia nuestra, por falta
              de reciprocidad.
            </p>
          </CardBody>
        </Card>

        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
