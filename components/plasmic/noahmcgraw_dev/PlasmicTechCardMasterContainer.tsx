// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jGvug5XrUvXJigea3T3bFe
// Component: 7ViszuiV9048

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

import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import TechCard from "../../TechCard"; // plasmic-import: 6mM_HUERx1cj/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jGvug5XrUvXJigea3T3bFe/projectcss
import sty from "./PlasmicTechCardMasterContainer.module.css"; // plasmic-import: 7ViszuiV9048/css

createPlasmicElementProxy;

export type PlasmicTechCardMasterContainer__VariantMembers = {
  showMore: "showMore";
};
export type PlasmicTechCardMasterContainer__VariantsArgs = {
  showMore?: SingleBooleanChoiceArg<"showMore">;
};
type VariantPropType = keyof PlasmicTechCardMasterContainer__VariantsArgs;
export const PlasmicTechCardMasterContainer__VariantProps =
  new Array<VariantPropType>("showMore");

export type PlasmicTechCardMasterContainer__ArgsType = {};
type ArgPropType = keyof PlasmicTechCardMasterContainer__ArgsType;
export const PlasmicTechCardMasterContainer__ArgProps =
  new Array<ArgPropType>();

export type PlasmicTechCardMasterContainer__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
  thirdRowExtraReveal?: Flex__<typeof Reveal>;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultTechCardMasterContainerProps {
  showMore?: SingleBooleanChoiceArg<"showMore">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTechCardMasterContainer__RenderFunc(props: {
  variants: PlasmicTechCardMasterContainer__VariantsArgs;
  args: PlasmicTechCardMasterContainer__ArgsType;
  overrides: PlasmicTechCardMasterContainer__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showMore",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showMore
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
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
        { [sty.rootshowMore]: hasVariant($state, "showMore", "showMore") }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___71EPt)}>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $ctx.plasmicCmsTechCategoryItem.data.title;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "No Title";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___208Ns, ``, {
          [sty.freeBoxshowMore___208NswtpBz]: hasVariant(
            $state,
            "showMore",
            "showMore"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__rOnoV, {
            [sty.freeBoxshowMore__rOnoVwtpBz]: hasVariant(
              $state,
              "showMore",
              "showMore"
            )
          })}
        >
          <Reveal
            className={classNames("__wab_instance", sty.reveal__owldw)}
            delay={0}
            direction={"top-left"}
            effect={"fade"}
            triggerOnce={true}
          >
            <TechCard
              className={classNames("__wab_instance", sty.techCard__iAlPl, {
                [sty.techCardshowMore__iAlPlwtpBz]: hasVariant(
                  $state,
                  "showMore",
                  "showMore"
                )
              })}
              techRefObj={(() => {
                try {
                  return $ctx.plasmicCmsTechCategoryItem.data.techList[2];
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
            />
          </Reveal>
          <Reveal
            className={classNames("__wab_instance", sty.reveal__lOtaC)}
            delay={250}
            direction={"top-right"}
            triggerOnce={true}
          >
            <TechCard
              className={classNames("__wab_instance", sty.techCard__yIed2)}
              techRefObj={(() => {
                try {
                  return $ctx.plasmicCmsTechCategoryItem.data.techList[5];
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
            />
          </Reveal>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__uvjPb)}>
          <Reveal
            className={classNames("__wab_instance", sty.reveal__xxZc)}
            delay={0}
            direction={"left"}
            triggerOnce={true}
          >
            <TechCard
              className={classNames("__wab_instance", sty.techCard__bRkFu)}
              techRefObj={(() => {
                try {
                  return $ctx.plasmicCmsTechCategoryItem.data.techList[0];
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
            />
          </Reveal>
          <Reveal
            className={classNames("__wab_instance", sty.reveal__xbIlr)}
            delay={250}
            triggerOnce={true}
          >
            <TechCard
              className={classNames("__wab_instance", sty.techCard__xx8Dn)}
              techRefObj={(() => {
                try {
                  return $ctx.plasmicCmsTechCategoryItem.data.techList[1];
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
            />
          </Reveal>
          <Reveal
            className={classNames("__wab_instance", sty.reveal___8WUab)}
            delay={500}
            direction={"right"}
            triggerOnce={true}
          >
            <TechCard
              className={classNames("__wab_instance", sty.techCard__mTdgy)}
              techRefObj={(() => {
                try {
                  return $ctx.plasmicCmsTechCategoryItem.data.techList[4];
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
            />
          </Reveal>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox___0PenG, {
            [sty.freeBoxshowMore___0PenGwtpBz]: hasVariant(
              $state,
              "showMore",
              "showMore"
            )
          })}
        >
          <Reveal
            className={classNames("__wab_instance", sty.reveal__db0A5)}
            delay={0}
            direction={"bottom-left"}
            triggerOnce={true}
          >
            <TechCard
              className={classNames("__wab_instance", sty.techCard__iJru7, {
                [sty.techCardshowMore__iJru7WtpBz]: hasVariant(
                  $state,
                  "showMore",
                  "showMore"
                )
              })}
              techRefObj={(() => {
                try {
                  return $ctx.plasmicCmsTechCategoryItem.data.techList[3];
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
            />
          </Reveal>
          <Reveal
            className={classNames("__wab_instance", sty.reveal__hlzxz, {
              [sty.revealshowMore__hlzxZwtpBz]: hasVariant(
                $state,
                "showMore",
                "showMore"
              )
            })}
            delay={250}
            direction={"bottom-right"}
            triggerOnce={true}
          >
            <TechCard
              className={classNames("__wab_instance", sty.techCard__si8Kq)}
              techRefObj={(() => {
                try {
                  return $ctx.plasmicCmsTechCategoryItem.data.techList[6];
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
            />
          </Reveal>
          <Reveal
            data-plasmic-name={"thirdRowExtraReveal"}
            data-plasmic-override={overrides.thirdRowExtraReveal}
            className={classNames("__wab_instance", sty.thirdRowExtraReveal, {
              [sty.thirdRowExtraRevealshowMore]: hasVariant(
                $state,
                "showMore",
                "showMore"
              )
            })}
            direction={hasVariant($state, "showMore", "showMore") ? "up" : "up"}
            duration={1000}
            effect={"fade"}
            reverse={hasVariant($state, "showMore", "showMore") ? false : false}
            triggerOnce={true}
          >
            <div
              className={classNames(
                projectcss.all,
                sty.freeBox__swPxJ,
                "transition-max-width transition-max-height",
                {
                  [sty.freeBoxshowMore__swPxJwtpBz]: hasVariant(
                    $state,
                    "showMore",
                    "showMore"
                  )
                }
              )}
            >
              <TechCard
                className={classNames("__wab_instance", sty.techCard__nFjaW, {
                  [sty.techCardshowMore__nFjaWwtpBz]: hasVariant(
                    $state,
                    "showMore",
                    "showMore"
                  )
                })}
                techRefObj={(() => {
                  try {
                    return $ctx.plasmicCmsTechCategoryItem.data.techList[7];
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
              />
            </div>
          </Reveal>
        </div>
        <div
          className={classNames(
            projectcss.all,
            sty.freeBox___1Oamk,
            "transition-max-height",
            {
              [sty.freeBoxshowMore___1OamkwtpBz]: hasVariant(
                $state,
                "showMore",
                "showMore"
              )
            }
          )}
        >
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $ctx.plasmicCmsTechCategoryItem.data.techList.slice(8);
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()
          ).map((__plasmic_item_0, __plasmic_idx_0) => {
            const currentItem = __plasmic_item_0;
            const currentIndex = __plasmic_idx_0;
            return (
              <Reveal
                className={classNames("__wab_instance", sty.reveal__nxG6B, {
                  [sty.revealshowMore__nxG6BwtpBz]: hasVariant(
                    $state,
                    "showMore",
                    "showMore"
                  )
                })}
                key={currentIndex}
                triggerOnce={true}
              >
                <TechCard
                  className={classNames("__wab_instance", sty.techCard__dBso4, {
                    [sty.techCardshowMore__dBso4WtpBz]: hasVariant(
                      $state,
                      "showMore",
                      "showMore"
                    )
                  })}
                  techRefObj={(() => {
                    try {
                      return currentItem;
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
                />
              </Reveal>
            );
          })}
        </div>
      </Stack__>
      {(() => {
        try {
          return (
            $ctx.plasmicCmsTechCategoryItem.data.techList.slice(7).length > 0
          );
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
          className={classNames(projectcss.all, sty.freeBox___9NGzp, {
            [sty.freeBoxshowMore___9NGzpwtpBz]: hasVariant(
              $state,
              "showMore",
              "showMore"
            )
          })}
        >
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link,
              { [sty.linkshowMore]: hasVariant($state, "showMore", "showMore") }
            )}
            component={Link}
            onClick={async event => {
              const $steps = {};

              $steps["updateShowMore"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "showMore",
                      operation: 2,
                      value: "showMore"
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = $stateGet($state, vgroup);
                      $stateSet($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateShowMore"] != null &&
                typeof $steps["updateShowMore"] === "object" &&
                typeof $steps["updateShowMore"].then === "function"
              ) {
                $steps["updateShowMore"] = await $steps["updateShowMore"];
              }
            }}
            platform={"nextjs"}
          >
            {hasVariant($state, "showMore", "showMore") ? (
              "SHow Less"
            ) : (
              <React.Fragment>
                {(() => {
                  try {
                    return (
                      "+" +
                      $ctx.plasmicCmsTechCategoryItem.data.techList.slice(7)
                        .length +
                      " More"
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            )}
          </PlasmicLink__>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "thirdRowExtraReveal", "link"],
  text: ["text"],
  thirdRowExtraReveal: ["thirdRowExtraReveal"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  thirdRowExtraReveal: typeof Reveal;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTechCardMasterContainer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTechCardMasterContainer__VariantsArgs;
    args?: PlasmicTechCardMasterContainer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTechCardMasterContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTechCardMasterContainer__ArgsType,
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
          internalArgPropNames: PlasmicTechCardMasterContainer__ArgProps,
          internalVariantPropNames: PlasmicTechCardMasterContainer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTechCardMasterContainer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTechCardMasterContainer";
  } else {
    func.displayName = `PlasmicTechCardMasterContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicTechCardMasterContainer = Object.assign(
  // Top-level PlasmicTechCardMasterContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    thirdRowExtraReveal: makeNodeComponent("thirdRowExtraReveal"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicTechCardMasterContainer
    internalVariantProps: PlasmicTechCardMasterContainer__VariantProps,
    internalArgProps: PlasmicTechCardMasterContainer__ArgProps
  }
);

export default PlasmicTechCardMasterContainer;
/* prettier-ignore-end */
