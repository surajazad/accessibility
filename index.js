// temp styles

const styles = `

.a11y-widget-dyslexia-support {
    font-family: 'Comic Sans MS' !important;
}

p.a11y-widget-dyslexia-support, div.a11y-widget-dyslexia-support, span.a11y-widget-dyslexia-support {
    font-size: 1.05em;
}

.a11y-widget-dark-contrast-style {
    color: rgb(255, 255, 255) !important;
    background: rgb(24, 24, 24) !important;
}

.a11y-widget-light-contrast-style {
    color: rgb(31, 37, 51) !important;
    background: rgb(255, 255, 255) !important;
}

.a11y-widget-large-cursor-style {
    cursor: url("http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur"), auto;
}

.a11y-widget-high-saturation-style {
    filter: saturate(4);
}

  .a11y-widget-low-saturation-style {
    filter: saturate(50%);
  }

  .a11y-widget-monochrome-style {
    filter: saturate(0);
  }

.a11y_floating_btn {
    position: fixed;
    bottom: 30px;
    left: 30px;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    border: none;

    svg {
        fill: rgb(207 127 145);
        scale: 1.4;
        border-radius: 50%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }

  .rvt-dialog-prevent-scroll {
    overflow: scroll !important;
  }
  .rvt-dialog[data-rvt-dialog-bottom-left] {    
    bottom: 0;
    left: 0;
    height: 100%;
    width: 500px;
    background: #eef2f7;
    border-radius: unset;
    }
    .rvt-dialog[data-rvt-dialog-bottom-right] {    
        bottom: 0;
        right: 0;
        height: 100%;
        width: 500px;
        background: #eef2f7;
        border-radius: unset;
    }
.rvt-dialog__header {
    background-color: rgb(207 127 145);
    color: #fff;
}
.rvt-button.rvt-button--plain.rvt-dialog__close {
    color: #fff;
    scale: 1.3;
}
.rvt-dialog__close:hover, .rvt-button--plain:active {
    background-color:  rgb(207 127 145);
    color: #fff;
}
.rvt-button:focus, .rvt-dialog__close:focus {
    box-shadow: 0 0 0 0.1rem #EEF2F6;
  }
  .a11y-widget-dialog-content {
    display: flex;
    flex-wrap: wrap;
    padding: 0;

        li {
            list-style: none;
                .a11y-feature-card {
                    margin: 10px;
                    color: black;
                    width: 135px;
                    height: 114px;
                    cursor: pointer;
                    background: #fff;
                    border-radius: 12px;
                    border: 2px solid #fff;
                    padding: 5px 10px;
                    transition: border-color .15s ease;
                    justify-content: center;
                    align-items: center;
                    
                    span {
                        display: block;
                    }

                    svg {
                        
                    }
                }
                button[data-a11y-feature-active="true"] {
                    transition: all 0.3s ease 0s;
                    border: 2px solid rgb(207 127 145) !important;
                    outline: none;

                    svg {
                        fill: rgb(207 127 145);
                    }
                }
            }
    }

    a.a11y_highLight_link_active {
        transition: all 0.3s ease 0s;
        border-color: rgb(0, 0, 0) !important;
        background-color: rgb(0, 0, 0) !important;
        color: rgb(255, 255, 0) !important;
        text-decoration: underline !important;
    }

    .a11y-widget-dialog-content button:hover, .a11y-widget-dialog-content button:focus, .a11y-widget-dialog-content button:focus-visible {
        transition: all 0.3s ease 0s;
        border: 2px solid rgb(207 127 145) !important;
        outline: none;
    }

    .a11y-widget-profiles-lists {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        border-bottom: 1px solid #d5d5d5;
        padding-bottom: 15px;

        li {
            list-style: none;
    
            button {
                margin: 10px;
                color: black;
                width: 214px;
                height: 50px;
                cursor: pointer;
                background: #fff;
                border-radius: 12px;
                border: 2px solid #fff;
                padding: 5px 10px;
                transition: border-color .15s ease;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    pointer-events: none;
                    margin-left: 5px;
                }
            }
            button[data-a11y-profile-active="true"] {
                background-color: rgb(207 127 145);
                color: #fff;

                svg {
                    fill: #fff;
                }
            }
        }
    }
    .a11y-widget-sub-heading-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .a11y-widget-settings {
            .rvt-dropdown__menu {
                right: 0
            }

            .rvt-button {
                background-color: transparent;
                border: none;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }

            ul {
                padding: 0;

                li {
                    list-style: none;
                }
            }
        }
    }
    .a11y-bottom-tageline {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        border-top: 1px solid #ddd;

        svg {
            margin-left: 5px;
            fill: #D82540;
        }
    }
}

  `;

(function () {
  // Variables

  const a11yPlugin = {};
  const supports = !!document.querySelector && !!window.addEventListener;

  // Elements
  const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const text = document.querySelectorAll("span, p, div, button, a, li");
  const textElements = [...headers, ...text];

  // Defaults settings/data
  // TODO: store selected profiles in local storage

  a11yPlugin.defaultLanguage = "english";

  a11yPlugin.data = {
    heading: "VS Accessibility Menu",
    subHeading: "Accessibility Profiles",
    settings: {
      align: {
        id: "move_left",
        label: "Move left",
        ariaLabel: "move widget to left",
      },
      reset: {
        id: "a11y_widget_reset",
        label: "Reset",
        ariaLabel: "Reset accessibility widget settings",
      },
    },
    profiles: {
      motorImpaired: {
        label: "Motor Impaired",
        iconType: "motorImpaired",
        isActive: "false",
      },
      blind: {
        label: "blind",
        iconType: "blind",
        isActive: "false",
      },
      visuallyImpaired: {
        label: "Visually Impaired",
        iconType: "visuallyImpaired",
        isActive: "false",
      },
      colorBlind: {
        label: "Color Blind",
        iconType: "colorBlind",
        isActive: "false",
      },
      congitive: {
        label: "congitive",
        iconType: "congitive",
        isActive: "false",
      },
      seizure: {
        label: "Seizure",
        iconType: "seizure",
        isActive: "false",
      },
      dyslexia_profile: {
        label: "dyslexia",
        iconType: "dyslexia",
        isActive: "false",
      },
      adhd: {
        label: "ADHD",
        iconType: "adhd",
        isActive: "false",
      },
    },
    features: {
      bigger_text: {
        label: "Bigger Text",
        iconType: "bigger_text",
        isActive: false,
      },
      highlight_links: {
        label: "Highlight Links",
        iconType: "highlight_links",
        isActive: false,
      },
      hide_images: {
        label: "Hide Images",
        iconType: "hide_images",
        isActive: false,
      },
      spacing_text: {
        label: "Text Spacing",
        iconType: "spacing_text",
        isActive: false,
      },
      mute_sounds: {
        label: "Mute Audio",
        iconType: "mute_sounds",
        isActive: false,
      },
      animations: {
        label: "Pause Animation",
        iconType: "animations",
        isActive: false,
      },
      large_cursor: {
        label: "Cursor",
        iconType: "cursor",
        isActive: false,
      },
      high_saturation: {
        label: "High Saturation",
        iconType: "high_saturation",
        isActive: false,
      },
      low_saturation: {
        label: "Low Saturation",
        iconType: "low_saturation",
        isActive: false,
      },
      monochrome: {
        label: "Monochrome",
        iconType: "monochrome",
        isActive: false,
      },
      darkTheme: {
        label: "Dark Contrast",
        iconType: "dark_theme",
        isActive: false,
      },
      lightTheme: {
        label: "Light Contrast",
        iconType: "light_theme",
        isActive: false,
      },
      dyslexia: {
        label: "Dyslexia friendly",
        iconType: "dyslexia",
        isActive: false,
      },
      quick_links: {
        label: "Quick Links",
        iconType: "quick_links",
        isActive: false,
        links: [],
      },
      tooltips: {
        label: "Tooltips",
        iconType: "tooltips",
        isActive: false,
      },
    },
  };

  const icons = {
    bigger_text:
      '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"></path></svg>',
    highlight_links: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path></svg>`,
    hide_images: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path></svg>`,
    spacing_text: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><path d="M64 128V96h64l0 320H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H192l0-320h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H160 48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32zM502.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32V352H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H512V160h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"></path></svg>`,
    mute_sounds: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path></svg>`,
    animations: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path></svg>`,
    theme: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"></path></svg>`,
    tooltips: ``,
    dyslexia: ``,
    quick_links: ``,
    cursor: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 320 512"><path d="M0 55.2V426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320H297.9c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"></path></svg>`,
    dark_theme: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>`,
    light_theme: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 1075 1024"><path xmlns="http://www.w3.org/2000/svg" d="M554.051 0c28.037 0 50.76 22.725 50.76 50.757v46.124c0 28.033-22.723 50.757-50.76 50.757-28.032 0-50.755-22.725-50.755-50.757V50.757C503.296 22.725 526.019 0 554.051 0zm0 286.011c-124.808 0-225.986 101.179-225.986 225.989s101.178 225.987 225.986 225.987c124.81 0 225.992-101.176 225.992-225.987S678.862 286.011 554.051 286.011zM226.55 512c0-180.875 146.628-327.503 327.501-327.503 180.879 0 327.506 146.628 327.506 327.503S734.93 839.501 554.051 839.501C373.178 839.501 226.55 692.874 226.55 512zm770.263-256.356c14.213 24.162 6.149 55.271-18.012 69.485l-39.209 23.062c-24.161 14.213-55.27 6.148-69.484-18.015s-6.149-55.271 18.017-69.484l39.204-23.062c24.161-14.213 55.27-6.148 69.484 18.014zm-885.485 0c14.213-24.162 45.322-32.227 69.485-18.014l39.206 23.062c24.162 14.213 32.227 45.322 18.014 69.484s-45.322 32.228-69.485 18.015l-39.205-23.062c-24.162-14.213-32.227-45.322-18.015-69.485zm126.705 438.183c14.213 24.161 6.148 55.27-18.014 69.484l-39.206 23.06c-24.162 14.213-55.271 6.149-69.485-18.012-14.213-24.166-6.148-55.276 18.015-69.489l39.205-23.06c24.162-14.213 55.271-6.149 69.485 18.017zm632.075 0c14.213-24.166 45.322-32.23 69.484-18.017l39.209 23.06c24.161 14.213 32.225 45.322 18.012 69.489-14.213 24.161-45.322 32.225-69.484 18.012l-39.204-23.06c-24.166-14.213-32.23-45.322-18.017-69.484zM554.051 876.36c28.037 0 50.76 22.728 50.76 50.76v46.121c0 28.037-22.723 50.76-50.76 50.76-28.032 0-50.755-22.723-50.755-50.76V927.12c0-28.032 22.723-50.76 50.755-50.76z"></path></svg>`,
    high_saturation: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 1075 1024"><path xmlns="http://www.w3.org/2000/svg" d="M600.448 25.866a54.539 54.539 0 0 0-92.785 0L243.01 454.098a375.146 375.146 0 0 0-34.597 72.305C123.718 766.229 295.517 1024 548.87 1024h10.373c253.353 0 425.149-257.772 340.454-497.597a375.201 375.201 0 0 0-34.596-72.305L600.448 25.866zm101.181 371.195c-2.852 2.882-5.765 5.911-8.796 9.062-23.27 24.196-53.402 55.526-114.698 81.796-102.809 44.059-178.74 25.407-216.865-17.703l192.785-311.942 147.574 238.788z"></path></svg>`,
    low_saturation: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 1075 1024"><path xmlns="http://www.w3.org/2000/svg" d="M598.979 25.04a52.797 52.797 0 0 0-89.821 0l-265.66 429.862a374.696 374.696 0 0 0-34.549 72.202C124.352 766.659 295.974 1024 548.864 1024h10.414c252.887 0 424.509-257.341 339.912-496.896a374.908 374.908 0 0 0-34.55-72.202L598.979 25.04zm-265.66 485.372L554.071 153.22 774.82 510.412a269.167 269.167 0 0 1 24.806 51.856 283.232 283.232 0 0 1 6.615 21.366c-53.402 5.596-110.316 30.556-179.666 99.907-89.533 89.533-218.868 98.166-319.196 58.271-19.039-55.096-20.709-117.693 1.133-179.543a269.108 269.108 0 0 1 24.806-51.856z"></path></svg>`,
    motorImpaired: `<svg xmlns="http://www.w3.org/2000/svg"  height="20" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M320 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM204.5 121.3c-5.4-2.5-11.7-1.9-16.4 1.7l-40.9 30.7c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l40.9-30.7c23.7-17.8 55.3-21 82.1-8.4l90.4 42.5c29.1 13.7 36.8 51.6 15.2 75.5L299.1 224h97.4c30.3 0 53 27.7 47.1 57.4L415.4 422.3c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L377 288H306.7c8.6 19.6 13.3 41.2 13.3 64c0 88.4-71.6 160-160 160S0 440.4 0 352s71.6-160 160-160c11.1 0 22 1.1 32.4 3.3l54.2-54.2-42.1-19.8zM160 448a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>`,
    visuallyImpaired: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>`,
    monochrome: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 1075 1024"><path xmlns="http://www.w3.org/2000/svg" d="M596.429 23.621a49.799 49.799 0 0 0-84.729 0L244.309 456.283a373.714 373.714 0 0 0-34.466 72.034C125.414 767.39 296.731 1024 548.824 1024h10.486c252.093 0 423.409-256.609 338.98-495.683a373.75 373.75 0 0 0-34.468-72.034L596.43 23.621zm-267.39 485.027 225.027-364.111.538.875 4.419 778.983h-10.199c-179.175 0-308.014-184.648-245.059-362.911a274.289 274.289 0 0 1 25.275-52.836z"></path></svg>`,
    blind: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"/></svg>`,
    colorBlind: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 1075 1024"><path xmlns="http://www.w3.org/2000/svg" d="M596.429 23.621a49.799 49.799 0 0 0-84.729 0L244.309 456.283a373.714 373.714 0 0 0-34.466 72.034C125.414 767.39 296.731 1024 548.824 1024h10.486c252.093 0 423.409-256.609 338.98-495.683a373.75 373.75 0 0 0-34.468-72.034L596.43 23.621zm-267.39 485.027 225.027-364.111.538.875 4.419 778.983h-10.199c-179.175 0-308.014-184.648-245.059-362.911a274.289 274.289 0 0 1 25.275-52.836z"></path></svg>`,
    dyslexia_profile: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512"><path d="M0 96C0 60.7 28.7 32 64 32h96c123.7 0 224 100.3 224 224s-100.3 224-224 224H64c-35.3 0-64-28.7-64-64V96zm160 0H64V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160z"></path></svg>`,
    congitive: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`,
    seizure: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/></svg>`,
    adhd: ``,
    love: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`,
    checkmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8" width="100%" height="100%"><path fill="none" stroke-linecap="round" stroke-width="1.75" d="m1.5 4.5 2 2 5-5"></path></svg>`,
  };

  // Methods

  const addRootElement = function () {
    const div = document.createElement("div");
    div.setAttribute("class", "a11y_floating_widget");
    div.setAttribute("id", "a11y_floating_widget_a4s3v2s1");
    document.body.appendChild(div);
  };

  const addFloatingBtn = function () {
    const iconContainer = document.getElementById(
      "a11y_floating_widget_a4s3v2s1"
    );
    iconContainer.innerHTML = `
    <button type="button" class="a11y_floating_btn" aria-label="accessibility widget"  data-rvt-dialog-trigger="a11y-widget-dialog">
       <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
    </div>`;

    // append widget modal to body
  };

  const renderFeatureTiles = function (a11yPluginData) {
    const featureData = a11yPluginData.features;
    let featuresHtml = "";
    for (let feature in featureData) {
      featuresHtml += `<li class="feature">
            <button class="a11y-feature-card" data-id=${feature} data-a11y-feature-active=${
        featureData[feature].isActive
      }>
            <span>${icons[featureData[feature].iconType]}</span>  
            <span>${featureData[feature].label}</span>
            </button>
            </li>`;
    }
    return featuresHtml;
  };

  const renderProfileTiles = function (a11yPluginData) {
    const profilesData = a11yPluginData.profiles;
    let profilesHtml = "";
    for (let profile in profilesData) {
      profilesHtml += `<li class="a11y_widget_profiles">
            <button class="a11y_widget_profile" data-id=${profile} data-a11y-profile-active=${
        profilesData[profile].isActive
      }>
            ${icons[profilesData[profile].iconType]}
            <span>${profilesData[profile].label}</span>
            </button>
            </li>`;
    }
    return profilesHtml;
  };

  const rederSettings = function (a11yPluginData) {
    return `
    <div class="rvt-dropdown" data-rvt-dropdown="example-dropdown">
        <button type="button" class="rvt-button" data-rvt-dropdown-toggle aria-label="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="context-fill" fill-opacity="context-fill-opacity">
                <path d="m8.628 16-1.25 0a1.632 1.632 0 0 1-1.562-1.177l-.406-1.414a5.939 5.939 0 0 1-.78-.466l-1.448.36a1.632 1.632 0 0 1-1.799-.765l-.625-1.082a1.633 1.633 0 0 1 .229-1.931l1.045-1.101A3.279 3.279 0 0 1 2 8c0-.153.014-.302.032-.45L.999 6.479a1.63 1.63 0 0 1-.238-1.94l.625-1.083a1.636 1.636 0 0 1 1.787-.768l1.477.355c.258-.179.51-.329.761-.452l.406-1.414A1.63 1.63 0 0 1 7.378 0l1.25 0c.714 0 1.354.478 1.559 1.163l.425 1.436c.242.121.484.266.739.444l1.478-.355a1.635 1.635 0 0 1 1.786.768l.625 1.083c.36.625.263 1.422-.237 1.941l-1.035 1.07c.018.148.032.297.032.45 0 .145-.014.285-.031.424l1.045 1.101c.492.519.586 1.312.229 1.931l-.625 1.083a1.63 1.63 0 0 1-1.8.764l-1.447-.36c-.259.182-.51.333-.759.458l-.425 1.437A1.638 1.638 0 0 1 8.628 16zm-4.016-4.341.528.109a4.72 4.72 0 0 0 1.032.615l.359.404.485 1.691c.046.16.194.271.36.271l1.25 0a.37.37 0 0 0 .359-.269l.506-1.707.355-.398c.324-.137.645-.33 1.01-.608l.529-.109 1.731.431a.378.378 0 0 0 .416-.176l.625-1.083a.378.378 0 0 0-.053-.446l-1.25-1.317-.167-.505.022-.174c.021-.127.041-.255.041-.388 0-.149-.021-.293-.042-.437l-.021-.15.171-.513 1.244-1.289a.378.378 0 0 0 .055-.448l-.625-1.082a.38.38 0 0 0-.412-.177l-1.758.422-.521-.108a4.7 4.7 0 0 0-.991-.594l-.356-.398-.506-1.707a.373.373 0 0 0-.36-.269l-1.25 0a.377.377 0 0 0-.36.271l-.486 1.691-.36.405a4.71 4.71 0 0 0-1.013.6l-.521.109-1.757-.422a.383.383 0 0 0-.413.177l-.625 1.083a.375.375 0 0 0 .055.447L3.142 6.9l.171.514-.021.15A2.981 2.981 0 0 0 3.25 8c0 .133.02.261.037.389l.022.174-.167.505-1.25 1.317a.38.38 0 0 0-.053.446l.625 1.083a.38.38 0 0 0 .415.176l1.733-.431z"/>
                <path d="M8 6.25c.965 0 1.75.785 1.75 1.75S8.965 9.75 8 9.75 6.25 8.965 6.25 8 7.035 6.25 8 6.25M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
            </svg>
        </button>
        <ul class="rvt-dropdown__menu" data-rvt-dropdown-menu hidden>
            <li><button data-id=${a11yPluginData.settings.align.id}>${a11yPluginData.settings.align.label}</button></li>
            <li><button data-id=${a11yPluginData.settings.reset.id}>${a11yPluginData.settings.reset.label}</button></li>
        </ul>
    </div>
    `;
  };

  const getDialogContent = function (a11yPluginData) {
    return `
    <header class="rvt-dialog__header">
      <h1 class="rvt-dialog__title" id="dialog-title">${
        a11yPluginData.heading
      }</h1>
      <p id="dialog-description" class="rvt-sr-only">Select you accessibility profiles</p>
    </header>
    <div class="rvt-dialog__body">
    <div class="a11y-widget-sub-heading-wrapper"> 
        <div>
            <h2>${a11yPluginData.subHeading}</h2> 
        </div>
        <div class="a11y-widget-settings">
        ${rederSettings(a11yPluginData)}
        </div>
    </div>
    <ul role="group" class="a11y-widget-profiles-lists a11y-widget-dialog-content" aria-label="accessibility profiles">${renderProfileTiles(
      a11yPluginData
    )}</ul>

    <ul class="a11y-widget-dialog-content" role="group" aria-label="accessibility features">${renderFeatureTiles(
      a11yPluginData
    )}</ul>
    </div>
  `;
  };

  const updateDialog = function (a11yPluginData) {
    const dialogRenderer = document.querySelector(
      ".a11y-dialog-dynamic-content"
    );
    dialogRenderer.innerHTML = getDialogContent(a11yPluginData);
  };

  const addDialog = function () {
    const dialogContent = getDialogContent(a11yPlugin.data);
    const dialog = `<div class="rvt-dialog" id="a11y-widget-dialog" role="dialog" tabindex="-1" aria-labelledby="dialog-title" aria-describedby="dialog-description" data-rvt-dialog="a11y-widget-dialog" data-rvt-dialog-modal data-rvt-dialog-bottom-right hidden>
    <div class="a11y-dialog-dynamic-content">${dialogContent}</div>  
    <button class="rvt-button rvt-button--plain rvt-dialog__close" data-rvt-dialog-close="a11y-widget-dialog" role="button">
    <span class="rvt-sr-only">Close</span>
      <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="m3.5 2.086 4.5 4.5 4.5-4.5L13.914 3.5 9.414 8l4.5 4.5-1.414 1.414-4.5-4.5-4.5 4.5L2.086 12.5l4.5-4.5-4.5-4.5L3.5 2.086Z"></path></svg>
    </button>
    <div class="a11y-bottom-tageline">Accessibility for Everyone ${icons["love"]}</div>
  </div>`;
    var dialogContainer = document.createElement("div");
    dialogContainer.setAttribute("class", "dialog-renderer");
    dialogContainer.innerHTML = dialog;
    document.body.appendChild(dialogContainer);
  };

  // Link Highlight
  const highlightLinks = () => {
    const element = document.querySelectorAll("a");
    element.forEach(function (el) {
      if (el.classList.contains("a11y_highLight_link_active")) {
        el.classList.remove("a11y_highLight_link_active");
      } else {
        el.classList.add("a11y_highLight_link_active");
      }
    });
  };

  // Hide images
  const hideImages = function () {
    const element = document.querySelectorAll("img");
    element.forEach(function (el) {
      if (el.style.visibility == "hidden") {
        el.style.visibility = "visible";
      } else {
        el.style.visibility = "hidden";
      }
    });
  };

  // pause-animation
  const pauseAnimation = function () {
    // TODO: add animation pause config
    // Add animations compo for demo
    // fix auto play video
    const element = document.querySelectorAll("video");
    element.forEach(function (el) {
      if (el.paused) {
        el.play();
      } else {
        el.pause();
      }
    });
  };

  // mute audio
  const muteAudio = function () {
    const videos = document.querySelectorAll("video");
    videos.forEach(function (video) {
      video.muted = !video.muted;
    });
  };

  let textSpacing = 0.0;
  let wordSpacing = 0.0;
  let spacingCounter = 0;

  const letterSpacing = function () {
    spacingCounter = spacingCounter + 1;
    const element = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, span, p, div, button, a"
    );
    if (spacingCounter > 3) {
      textSpacing = 0.0;
      wordSpacing = 0.0;
      spacingCounter = 0;
    } else {
      textSpacing = textSpacing + 0.12;
      wordSpacing = wordSpacing + 0.16;
    }
    element.forEach(function (el) {
      el.style.letterSpacing = `${textSpacing}em`;
      el.style.wordSpacing = `${wordSpacing}em`;
    });
  };

  // light-contrast

  const lightTheme = function () {
    var element = document.getElementsByTagName("BODY")[0];
    const lightContrastStylesApplied =
      document.getElementsByClassName("a11y-widget-light-contrast-style")
        .length > 0;
    if (lightContrastStylesApplied) {
      element.classList.remove("a11y-widget-light-contrast-style");
    } else {
      element.classList.remove("a11y-widget-dark-contrast-style");
      element.classList.add("a11y-widget-light-contrast-style");
    }
  };

  // dark-contrast
  const darkTheme = function () {
    var element = document.getElementsByTagName("BODY")[0];
    const darkContrastStylesApplied =
      document.getElementsByClassName("a11y-widget-dark-contrast-style")
        .length > 0;
    if (darkContrastStylesApplied) {
      element.classList.remove("a11y-widget-dark-contrast-style");
    } else {
      element.classList.add("a11y-widget-dark-contrast-style");
    }
  };

  // High Saturation
  const highSaturation = () => {
    var element = document.getElementsByTagName("BODY")[0];
    const highSaturationStylesApplied =
      document.getElementsByClassName("a11y-widget-high-saturation-style")
        .length > 0;
    if (highSaturationStylesApplied) {
      element.classList.remove("a11y-widget-high-saturation-style");
    } else {
      element.classList.add("a11y-widget-high-saturation-style");
    }
  };

  // click of low-saturation
  const lowSaturation = function () {
    var element = document.getElementsByTagName("BODY")[0];
    const lowSaturationStylesApplied =
      document.getElementsByClassName("a11y-widget-low-saturation-style")
        .length > 0;
    if (lowSaturationStylesApplied) {
      element.classList.remove("a11y-widget-low-saturation-style");
    } else {
      element.classList.add("a11y-widget-low-saturation-style");
    }
  };

  // monochrome
  const monochrome = function () {
    var element = document.getElementsByTagName("BODY")[0];
    const monochromeStylesApplied =
      document.getElementsByClassName("a11y-widget-monochrome-style").length >
      0;
    if (monochromeStylesApplied) {
      element.classList.remove("a11y-widget-monochrome-style");
    } else {
      element.classList.add("a11y-widget-monochrome-style");
    }
  };

  // large cursor
  const cursorEnlarge = () => {
    var element = document.getElementsByTagName("BODY")[0];
    const largeCursorStylesApplied =
      document.getElementsByClassName("a11y-widget-large-cursor-style").length >
      0;
    if (largeCursorStylesApplied) {
      element.classList.remove("a11y-widget-large-cursor-style");
    } else {
      element.classList.add("a11y-widget-large-cursor-style");
    }
  };

  // How this helps people with Dyslexia?
  // The letters are more rounded and spaced out, which can help make them easier to distinguish from each other.
  // Additionally, the font has a unique feature where the lowercase "b" and "d" letters are different in shape, making it easier for dyslexic readers to tell them apart.

  // Dyslexia

  // Utility functions

  const initialFontValues = () => {
    let initialValue = {};

    // H1
    const h1Elem = document.getElementsByTagName("h1")[0];
    if (h1Elem) {
      const h1elemSize = window
        .getComputedStyle(h1Elem, null)
        .getPropertyValue("font-size");
      const h1Value = parseFloat(h1elemSize);
      initialValue["h1"] = h1Value;
    }

    // H2
    const h2Elem = document.getElementsByTagName("h2")[0];
    if (h2Elem) {
      const h2elemSize = window
        .getComputedStyle(h2Elem, null)
        .getPropertyValue("font-size");
      const h2Value = parseFloat(h2elemSize);
      initialValue["h2"] = h2Value;
    }

    // H3
    const h3Elem = document.getElementsByTagName("h3")[0];
    if (h3Elem) {
      const h3elemSize = window
        .getComputedStyle(h3Elem, null)
        .getPropertyValue("font-size");
      const h3Value = parseFloat(h3elemSize);
      initialValue["h3"] = h3Value;
    }

    // H4
    const h4Elem = document.getElementsByTagName("h4")[0];
    if (h4Elem) {
      const h4elemSize = window
        .getComputedStyle(h4Elem, null)
        .getPropertyValue("font-size");
      const h4Value = parseFloat(h4elemSize);
      initialValue["h4"] = h4Value;
    }

    // H5
    const h5Elem = document.getElementsByTagName("h5")[0];
    if (h5Elem) {
      const h5elemSize = window
        .getComputedStyle(h5Elem, null)
        .getPropertyValue("font-size");
      const h5Value = parseFloat(h5elemSize);
      initialValue["h5"] = h5Value;
    }

    // H6
    const h6Elem = document.getElementsByTagName("h6")[0];
    if (h6Elem) {
      const h6elemSize = window
        .getComputedStyle(h6Elem, null)
        .getPropertyValue("font-size");
      const h6Value = parseFloat(h6elemSize);
      initialValue["h6"] = h6Value;
    }

    // SPAN
    const spanElem = document.getElementsByTagName("h6")[0];
    if (spanElem) {
      const spanelemSize = window
        .getComputedStyle(spanElem, null)
        .getPropertyValue("font-size");
      const spanValue = parseFloat(spanelemSize);
      initialValue["span"] = spanValue;
    }

    // P
    const pElem = document.getElementsByTagName("p")[0];
    if (pElem) {
      const pelemSize = window
        .getComputedStyle(pElem, null)
        .getPropertyValue("font-size");
      const pValue = parseFloat(pelemSize);
      initialValue["p"] = pValue;
    }
    return initialValue;
  };

  const initFontValues = initialFontValues();

  const increaseFontByPercent = (elem, percentage) => {
    const elemName = elem.nodeName.toLowerCase();
    const fontVal = initFontValues[elemName];
    let percentValue = fontVal * percentage;
    elem.style.fontSize = fontVal + percentValue + "px";
  };

  // TODO: refactor enableDyslexia
  const enableDyslexia = function () {

    const dyslexiaStylesApplied =
      document.getElementsByClassName("a11y-widget-dyslexia-support").length >
      0;

    if (dyslexiaStylesApplied) {
      textElements.forEach((elem) => {
        elem.classList.remove("a11y-widget-dyslexia-support");
      });

      headers.forEach((headerElem) => {
        const elemName = headerElem.nodeName.toLowerCase();
        const fontVal = initFontValues[elemName];
        headerElem.style.fontSize = fontVal + "px";
      });
    } else {
      textElements.forEach((elem) => {
        elem.classList.add("a11y-widget-dyslexia-support");
        headers.forEach((headerElem) => {
          increaseFontByPercent(headerElem, 0.2);
        });
      });
    }
  };

  // TODO: Refactor Visually Impaired

  const enableVisuallyImpaired = () => {
    debugger;
    const visuallyImpairedApplied =
      document.getElementsByClassName("a11y-widget-visyally-impaired-support");
    if (visuallyImpairedApplied.length > 0) {
      
      textElements.forEach(elem => {
         const elemName = elem.nodeName.toLowerCase();
         const fontVal = initFontValues[elemName];
         elem.style.fontSize = fontVal + 'px';
         elem.classList.remove('a11y-widget-visyally-impaired-support');
      })
   } else {
      textElements.forEach(textElem => {
         increaseFontByPercent(textElem, 0.10);
         textElem.classList.add('a11y-widget-visyally-impaired-support');
      })
   }
  }
  // text-zoom

  let counter = 0;

  const resizeText = function (multiplier) {
    debugger;
    counter = counter + 1;
    if (counter > 4) {
      document.body.style.fontSize = "";
      counter = 0;
    } else if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize =
      parseFloat(document.body.style.fontSize) + multiplier * 0.2 + "em";
  };

  const bindWidgetEvents = function () {
    const a11yWidgetDialog = document.querySelector("#a11y-widget-dialog");
    let isActiveProfile;
    a11yWidgetDialog.addEventListener("click", function (event) {
      const feature = event.target.dataset.id;
      let updatedPluginData = {};
      switch (feature) {
        case "bigger_text":
          resizeText(1);
          break;
        case "highlight_links":
          highlightLinks();
          break;
        case "hide_images":
          hideImages();
          break;
        case "spacing_text":
          letterSpacing();
          break;
        case "mute_sounds":
          muteAudio();
          break;
        case "animations":
          pauseAnimation();
          break;
        case "darkTheme":
          darkTheme();
          break;
        case "lightTheme":
          lightTheme();
          break;
        case "high_saturation":
          highSaturation();
          break;
        case "low_saturation":
          lowSaturation();
          break;
        case "monochrome":
          monochrome();
          break;
        case "large_cursor":
          cursorEnlarge();
          break;
        case "dyslexia":
          enableDyslexia();
          break;
        case "colorBlind":
          isActiveProfile =
            event.target.dataset.a11yProfileActive === "false"
              ? "true"
              : "false";
          updatedPluginData = {
            ...a11yPlugin.data,
            profiles: {
              ...a11yPlugin.data.profiles,
              colorBlind: {
                label: "Color Blind",
                iconType: "colorBlind",
                isActive: isActiveProfile,
              },
            },
            features: {
              ...a11yPlugin.data.features,
              high_saturation: {
                label: "High Saturation",
                iconType: "high_saturation",
                isActive: isActiveProfile,
              },
            },
          };
          updateDialog(updatedPluginData);
          highSaturation();
          break;
        case "congitive":
          isActiveProfile =
            event.target.dataset.a11yProfileActive === "false"
              ? "true"
              : "false";
          updatedPluginData = {
            ...a11yPlugin.data,
            profiles: {
              ...a11yPlugin.data.profiles,
              congitive: {
                label: "congitive",
                iconType: "congitive",
                isActive: isActiveProfile,
              },
            },
            features: {
              ...a11yPlugin.data.features,
              bigger_text: {
                label: "Bigger Text",
                iconType: "bigger_text",
                isActive: isActiveProfile,
              },
              animations: {
                label: "Pause Animation",
                iconType: "animations",
                isActive: isActiveProfile,
              },
              large_cursor: {
                label: "Cursor",
                iconType: "cursor",
                isActive: isActiveProfile,
              },
            },
          };
          updateDialog(updatedPluginData);
          resizeText(1);
          pauseAnimation();
          cursorEnlarge();
          // showTooltips()
          break;
        case "seizure":
          isActiveProfile =
            event.target.dataset.a11yProfileActive === "false"
              ? "true"
              : "false";
          updatedPluginData = {
            ...a11yPlugin.data,
            profiles: {
              ...a11yPlugin.data.profiles,
              seizure: {
                label: "seizure",
                iconType: "seizure",
                isActive: isActiveProfile,
              },
            },
            features: {
              ...a11yPlugin.data.features,
              low_saturation: {
                label: "Low Saturation",
                iconType: "low_saturation",
                isActive: isActiveProfile,
              },
              animations: {
                label: "Pause Animation",
                iconType: "animations",
                isActive: isActiveProfile,
              },
            },
          };
          updateDialog(updatedPluginData);
          lowSaturation();
          pauseAnimation();
          break;
        case "adhd":
          isActiveProfile =
            event.target.dataset.a11yProfileActive === "false"
              ? "true"
              : "false";
          updatedPluginData = {
            ...a11yPlugin.data,
            profiles: {
              ...a11yPlugin.data.profiles,
              adhd: {
                label: "ADHD",
                iconType: "adhd",
                isActive: isActiveProfile,
              },
            },
            features: {
              ...a11yPlugin.data.features,
              low_saturation: {
                label: "Low Saturation",
                iconType: "low_saturation",
                isActive: isActiveProfile,
              },
              animations: {
                label: "Pause Animation",
                iconType: "animations",
                isActive: isActiveProfile,
              },
            },
          };
          updateDialog(updatedPluginData);
          lowSaturation();
          pauseAnimation();
          break;
        case "dyslexia_profile":
          isActiveProfile =
            event.target.dataset.a11yProfileActive === "false"
              ? "true"
              : "false";
          updatedPluginData = {
            ...a11yPlugin.data,
            profiles: {
              ...a11yPlugin.data.profiles,
              dyslexia_profile: {
                label: "dyslexia",
                iconType: "dyslexia",
                isActive: isActiveProfile,
              },
            },
            features: {
              ...a11yPlugin.data.features,
              dyslexia: {
                label: "Dyslexia friendly",
                iconType: "dyslexia",
                isActive: isActiveProfile,
              },
            },
          };
          console.log(updatedPluginData);
          updateDialog(updatedPluginData);
          enableDyslexia();
          break;
        case "motorImpaired":
          isActiveProfile =
            event.target.dataset.a11yProfileActive === "false"
              ? "true"
              : "false";
          updatedPluginData = {
            ...a11yPlugin.data,
            profiles: {
              ...a11yPlugin.data.profiles,
              motorImpaired: {
                label: "Motor Impaired",
                iconType: "motorImpaired",
                isActive: isActiveProfile,
              },
            },
            features: {
              ...a11yPlugin.data.features,
              animations: {
                label: "Pause Animation",
                iconType: "animations",
                isActive: isActiveProfile,
              },
              large_cursor: {
                label: "Cursor",
                iconType: "cursor",
                isActive: isActiveProfile,
              },
            },
          };
          console.log(updatedPluginData);
          updateDialog(updatedPluginData);
          pauseAnimation();
          cursorEnlarge();
          // showTooltips()
          break;
        case "visuallyImpaired":
          isActiveProfile =
            event.target.dataset.a11yProfileActive === "false"
              ? "true"
              : "false";
          updatedPluginData = {
            ...a11yPlugin.data,
            profiles: {
              ...a11yPlugin.data.profiles,
              visuallyImpaired: {
                label: "Visually Impaired",
                iconType: "visuallyImpaired",
                isActive: isActiveProfile,
              },
            },
            features: {
              ...a11yPlugin.data.features,
              bigger_text: {
                label: "Bigger Text",
                iconType: "bigger_text",
                isActive: isActiveProfile,
              },
              animations: {
                label: "Pause Animation",
                iconType: "animations",
                isActive: isActiveProfile,
              },
              large_cursor: {
                label: "Cursor",
                iconType: "cursor",
                isActive: isActiveProfile,
              },
            },
          };
          console.log(updatedPluginData);
          updateDialog(updatedPluginData);
          enableVisuallyImpaired();
          pauseAnimation();
          cursorEnlarge();
          // showTooltips()
          break;
        case "move_right":
          document
            .querySelector(".rvt-dialog")
            .removeAttribute("data-rvt-dialog-bottom-left");
          document
            .querySelector(".rvt-dialog")
            .setAttribute("data-rvt-dialog-bottom-right", "");
          updatedPluginData = {
            ...a11yPlugin.data,
            settings: {
              ...a11yPlugin.data.settings,
              align: {
                id: "move_left",
                label: "Move Left",
                ariaLabel: "move widget to left",
              },
            },
          };
          updateDialog(updatedPluginData);
          break;

        case "move_left":
          document
            .querySelector(".rvt-dialog")
            .removeAttribute("data-rvt-dialog-bottom-right");
          document
            .querySelector(".rvt-dialog")
            .setAttribute("data-rvt-dialog-bottom-left", "");
          updatedPluginData = {
            ...a11yPlugin.data,
            settings: {
              ...a11yPlugin.data.settings,
              align: {
                id: "move_right",
                label: "Move Right",
                ariaLabel: "move widget to right",
              },
            },
          };
          updateDialog(updatedPluginData);
          break;
        case "a11y_widget_reset":
          // updateDialog(a11yPlugin.data);
          window.location.reload();
          break;
      }
    }, true);
  };

  const addStyles = function () {
    let head = document.head;
    let style = document.createElement("style");
    head.appendChild(style);
    style.type = "text/css";
    style.appendChild(document.createTextNode(styles));
  };

  const addRivetScript = function () {
    const src = "https://unpkg.com/rivet-core@2.6.0/js/rivet.min.js";
    let head = document.head;
    let script = document.createElement("script");
    script.setAttribute('src', src);
    head.appendChild(script);
    // Rivet Styles
    let styleLink = document.createElement('link');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute('href', 'https://unpkg.com/rivet-core@2.6.0/css/rivet.min.css');
    head.appendChild(styleLink);
  };
  
  // Initialize Plugin
  // input options for plugin config
  a11yPlugin.init = function (options) {
    // check browsupport
    if (!supports) return;

    document.addEventListener("DOMContentLoaded", () => {
      addRootElement();
      addRivetScript();
      addStyles();
      addFloatingBtn();
      addDialog();
      bindWidgetEvents();
      // by default mute audio
      muteAudio();
    });
  };

  window.onload = () => {
    if(window.Rivet) {
      window.Rivet.init();
    }
  }

  a11yPlugin.destroy = function () {
    // clear all events
  };

  // render plugin

  a11yPlugin.init();
})();
