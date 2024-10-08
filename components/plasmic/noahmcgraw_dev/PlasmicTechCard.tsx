// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jGvug5XrUvXJigea3T3bFe
// Component: 6mM_HUERx1cj

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms";
import { CmsRowField } from "@plasmicpkgs/plasmic-cms";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jGvug5XrUvXJigea3T3bFe/projectcss
import sty from "./PlasmicTechCard.module.css"; // plasmic-import: 6mM_HUERx1cj/css

createPlasmicElementProxy;

export type PlasmicTechCard__VariantMembers = {};
export type PlasmicTechCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicTechCard__VariantsArgs;
export const PlasmicTechCard__VariantProps = new Array<VariantPropType>();

export type PlasmicTechCard__ArgsType = {
  techRefObj?: any;
  classNameBase?: string;
};
type ArgPropType = keyof PlasmicTechCard__ArgsType;
export const PlasmicTechCard__ArgProps = new Array<ArgPropType>(
  "techRefObj",
  "classNameBase"
);

export type PlasmicTechCard__OverridesType = {
  root?: Flex__<"div">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  cmsEntryImage?: Flex__<typeof CmsRowImage>;
  img?: Flex__<typeof PlasmicImg__>;
  cmsEntryField?: Flex__<typeof CmsRowField>;
};

export interface DefaultTechCardProps {
  techRefObj?: any;
  classNameBase?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTechCard__RenderFunc(props: {
  variants: PlasmicTechCard__VariantsArgs;
  args: PlasmicTechCard__ArgsType;
  overrides: PlasmicTechCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          classNameBase: ``
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    (() => {
      try {
        return typeof $props.techRefObj !== "undefined";
      } catch (e) {
        if (
          e instanceof TypeError ||
          e?.plasmicType === "PlasmicUndefinedDataError"
        ) {
          return true;
        }
        throw e;
      }
    })() ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          sty.root,
          args.classNameBase
        )}
      >
        <CmsQueryRepeater
          data-plasmic-name={"cmsDataFetcher"}
          data-plasmic-override={overrides.cmsDataFetcher}
          className={classNames("__wab_instance", sty.cmsDataFetcher)}
          desc={false}
          emptyMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ni4Do
                  )}
                >
                  {"No matching published entries found."}
                </div>
              )}
            </DataCtxReader__>
          }
          filterField={"_id"}
          filterValue={(() => {
            try {
              return $props.techRefObj.technology;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
          forceEmptyState={false}
          forceLoadingState={false}
          limit={0}
          loadingMessage={
            <DataCtxReader__>
              {$ctx => (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vNrw
                  )}
                >
                  {"Loading..."}
                </div>
              )}
            </DataCtxReader__>
          }
          noAutoRepeat={false}
          noLayout={false}
          table={"technology"}
          useDraft={false}
        >
          <DataCtxReader__>
            {$ctx => (
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mmDiy)}
              >
                <CmsRowImage
                  data-plasmic-name={"cmsEntryImage"}
                  data-plasmic-override={overrides.cmsEntryImage}
                  className={classNames("__wab_instance", sty.cmsEntryImage)}
                  srcProp={"src"}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__qkgub)}
                  >
                    <PlasmicImg__
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      src={(() => {
                        try {
                          return $ctx.plasmicCmsTechnologyItem.data.logo.url;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "https://studio.plasmic.app/static/img/placeholder-full.png";
                          }
                          throw e;
                        }
                      })()}
                    />
                  </div>
                </CmsRowImage>
                <CmsRowField
                  data-plasmic-name={"cmsEntryField"}
                  data-plasmic-override={overrides.cmsEntryField}
                  className={classNames("__wab_instance", sty.cmsEntryField)}
                  themeResetClassName={classNames(
                    projectcss.root_reset,
                    projectcss.root_reset_tags,
                    projectcss.plasmic_default_styles,
                    projectcss.plasmic_mixins,
                    projectcss.plasmic_tokens,
                    plasmic_antd_5_hostless_css.plasmic_tokens
                  )}
                />
              </Stack__>
            )}
          </DataCtxReader__>
        </CmsQueryRepeater>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cmsDataFetcher", "cmsEntryImage", "img", "cmsEntryField"],
  cmsDataFetcher: ["cmsDataFetcher", "cmsEntryImage", "img", "cmsEntryField"],
  cmsEntryImage: ["cmsEntryImage", "img"],
  img: ["img"],
  cmsEntryField: ["cmsEntryField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  cmsDataFetcher: typeof CmsQueryRepeater;
  cmsEntryImage: typeof CmsRowImage;
  img: typeof PlasmicImg__;
  cmsEntryField: typeof CmsRowField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTechCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTechCard__VariantsArgs;
    args?: PlasmicTechCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTechCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTechCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTechCard__ArgProps,
          internalVariantPropNames: PlasmicTechCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTechCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTechCard";
  } else {
    func.displayName = `PlasmicTechCard.${nodeName}`;
  }
  return func;
}

export const PlasmicTechCard = Object.assign(
  // Top-level PlasmicTechCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    img: makeNodeComponent("img"),
    cmsEntryField: makeNodeComponent("cmsEntryField"),

    // Metadata about props expected for PlasmicTechCard
    internalVariantProps: PlasmicTechCard__VariantProps,
    internalArgProps: PlasmicTechCard__ArgProps
  }
);

export default PlasmicTechCard;
/* prettier-ignore-end */
