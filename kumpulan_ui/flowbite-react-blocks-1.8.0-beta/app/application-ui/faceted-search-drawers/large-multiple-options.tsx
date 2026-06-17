"use client";

import {
  Button,
  Checkbox,
  Drawer,
  Label,
  Radio,
  Select,
  ToggleSwitch,
} from "flowbite-react";
import { useState } from "react";

export function LargeFacetedSearchDrawerWithMultipleOptions() {
  const [isOpen, setOpen] = useState(false);
  const [projectsCompleted, setProjectsCompleted] = useState(false);
  const [technologiesUsed, setTechnologiesUsed] = useState(true);
  const [numberReviews, setNumberReviews] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>Show drawer</Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        className="w-full max-w-lg"
      >
        <Drawer.Header title="FILTERS" titleIcon={() => <></>} />
        <Drawer.Items className="h-full">
          <form className="h-full">
            <div className="mt-4 flex h-full flex-1 flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                    Status
                  </h6>
                  <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <Radio
                          id="status-all"
                          name="list-radio"
                          defaultChecked
                        />
                        <Label
                          htmlFor="status-all"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          All
                        </Label>
                      </div>
                    </li>
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <Radio id="status-active" name="list-radio" />
                        <Label
                          htmlFor="status-active"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Active
                        </Label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center pl-3">
                        <Radio id="status-inactive" name="list-radio" />
                        <Label
                          htmlFor="status-inactive"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Inactive
                        </Label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Skills
                  </Label>
                  <ul className="grid w-full grid-cols-2 gap-3 md:grid-cols-3">
                    <li>
                      <Checkbox
                        id="html-css"
                        className="peer hidden"
                        name="skills"
                      />
                      <Label
                        htmlFor="html-css"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        HTML/CSS
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="ui-design"
                        className="peer hidden"
                        name="skills"
                      />
                      <Label
                        htmlFor="ui-design"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        UI Design
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="figma"
                        className="peer hidden"
                        name="skills"
                        defaultChecked
                      />
                      <Label
                        htmlFor="figma"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        Figma
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="react"
                        className="peer hidden"
                        name="skills"
                      />
                      <Label
                        htmlFor="react"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        React
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="flowbite"
                        className="peer hidden"
                        name="skills"
                        defaultChecked
                      />
                      <Label
                        htmlFor="flowbite"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        Flowbite
                      </Label>
                    </li>
                    <li>
                      <Checkbox id="js" className="peer hidden" name="skills" />
                      <Label
                        htmlFor="js"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        JS
                      </Label>
                    </li>
                    <li>
                      <Checkbox id="php" value="" className="peer hidden" />
                      <Label
                        htmlFor="php"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        PHP
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="ux"
                        value=""
                        className="peer hidden"
                        name="skills"
                      />
                      <Label
                        htmlFor="ux"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        UX
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="logo-design"
                        name="skills"
                        className="peer hidden"
                      />
                      <Label
                        htmlFor="logo-design"
                        className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-primary-600 bg-white p-2 text-center text-sm font-medium text-primary-600 hover:bg-primary-500 hover:text-white peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white dark:border-primary-500 dark:bg-gray-800 dark:text-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white dark:peer-checked:border-primary-500 dark:peer-checked:bg-primary-500"
                      >
                        Logo Design
                      </Label>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Technologies
                  </p>
                  <ul className="grid w-full grid-cols-2 gap-4">
                    <li>
                      <Checkbox
                        id="react-option"
                        name="technologies"
                        className="peer hidden"
                      />
                      <Label
                        htmlFor="react-option"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300 md:p-5"
                      >
                        <div className="block">
                          <svg
                            className="mb-2 h-7 w-7 text-sky-500"
                            fill="currentColor"
                            aria-hidden
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                          </svg>
                          <div className="w-full text-lg font-semibold">
                            React JS
                          </div>
                          <div className="w-full text-sm">
                            A JavaScript library for building user interfaces.
                          </div>
                        </div>
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="vue-option"
                        name="technologies"
                        className="peer hidden"
                      />
                      <Label
                        htmlFor="vue-option"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300 md:p-5"
                      >
                        <div className="block">
                          <svg
                            className="mb-2 h-7 w-7 text-green-400"
                            fill="currentColor"
                            aria-hidden
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" />
                          </svg>
                          <div className="w-full text-lg font-semibold">
                            Vue JS
                          </div>
                          <div className="w-full text-sm">
                            An model–view front end JavaScript framework.
                          </div>
                        </div>
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="flowbite-option"
                        name="technologies"
                        className="peer hidden"
                      />
                      <Label
                        htmlFor="flowbite-option"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300 md:p-5"
                      >
                        <div className="block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-2 h-7 w-7"
                            fill="none"
                            viewBox="0 0 25 25"
                          >
                            <path
                              fill="url(#a)"
                              d="M18 10v1l-2 1-3 1-1 1-2 2s-1 2 1 3h3l6-3c1-1 3-3 3-5l-5-1Z"
                            />
                            <path
                              fill="url(#b)"
                              d="m17 7 1 2v1l2 1h3c1-2 0-4-1-6a12 12 0 0 0-8-5l-1 2-1 2 5 3Z"
                            />
                            <path
                              fill="url(#c)"
                              d="M1 8V7l5-4 6 1 2-4C8-1 2 3 1 8Z"
                            />
                            <path
                              fill="url(#d)"
                              d="M14 19a3 3 0 0 1-3 0l-2 1-1 3 5 1a12 12 0 0 0 8-4l-1-2-1-1-5 2Z"
                            />
                            <path
                              fill="url(#e)"
                              d="m11 19-1-2V8H6l-1 2v6l2 6 1 1 3-4Z"
                            />
                            <path
                              fill="url(#f)"
                              d="m21 4 1 1a8 8 0 0 1-3 11v1l2 3c4-4 4-11 0-16Z"
                            />
                            <path
                              fill="url(#g)"
                              d="M5 10a3 3 0 0 1 2-2V6L5 3 1 7a12 12 0 0 0 0 9h4v-6Z"
                            />
                            <path
                              fill="url(#h)"
                              d="M7 8h3l6 4c1 0 1 0 0 0h2l1-3-2-2-5-3c-2-1-4-2-6-1H5l2 5Z"
                            />
                            <path
                              fill="url(#i)"
                              d="M14 24h-1a8 8 0 0 1-8-8H1c2 6 8 9 13 8Z"
                            />
                            <defs>
                              <linearGradient
                                id="a"
                                x1="15"
                                x2="17.4"
                                y1="18"
                                y2="9.7"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#1724C9" />
                                <stop offset="1" stop-color="#1C64F2" />
                              </linearGradient>
                              <linearGradient
                                id="b"
                                x1="20.5"
                                x2="14.3"
                                y1="7.9"
                                y2="1.8"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#1C64F2" />
                                <stop offset="1" stop-color="#0092FF" />
                              </linearGradient>
                              <linearGradient
                                id="c"
                                x1="12.1"
                                x2="2.8"
                                y1="3.9"
                                y2="4.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#0092FF" />
                                <stop offset="1" stop-color="#45B2FF" />
                              </linearGradient>
                              <linearGradient
                                id="d"
                                x1="11.5"
                                x2="19.9"
                                y1="21.6"
                                y2="19.4"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#1C64F2" />
                                <stop offset="1" stop-color="#0092FF" />
                              </linearGradient>
                              <linearGradient
                                id="e"
                                x1="5.5"
                                x2="11.4"
                                y1="11.9"
                                y2="18.1"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#1724C9" />
                                <stop offset="1" stop-color="#1C64F2" />
                              </linearGradient>
                              <linearGradient
                                id="f"
                                x1="19.1"
                                x2="23.3"
                                y1="16.4"
                                y2="8"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#0092FF" />
                                <stop offset="1" stop-color="#45B2FF" />
                              </linearGradient>
                              <linearGradient
                                id="g"
                                x1="4"
                                x2="1.8"
                                y1="7"
                                y2="15.4"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#1C64F2" />
                                <stop offset="1" stop-color="#0092FF" />
                              </linearGradient>
                              <linearGradient
                                id="h"
                                x1="15.4"
                                x2="7.3"
                                y1="6.6"
                                y2="8.6"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#1724C9" />
                                <stop offset="1" stop-color="#1C64F2" />
                              </linearGradient>
                              <linearGradient
                                id="i"
                                x1="4.8"
                                x2="10"
                                y1="16.2"
                                y2="24"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#0092FF" />
                                <stop offset="1" stop-color="#45B2FF" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="w-full text-lg font-semibold">
                            Flowbite
                          </div>
                          <div className="w-full text-sm">
                            Open-source library of over 450 UI components.
                          </div>
                        </div>
                      </Label>
                    </li>
                    <li>
                      <Checkbox
                        id="angular-option"
                        name="technologies"
                        className="peer hidden"
                      />
                      <Label
                        htmlFor="angular-option"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300 md:p-5"
                      >
                        <div className="block">
                          <svg
                            className="mb-2 h-7 w-7 text-red-600"
                            fill="currentColor"
                            aria-hidden
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" />
                          </svg>
                          <div className="w-full text-lg font-semibold">
                            Angular
                          </div>
                          <div className="w-full text-sm">
                            A TypeScript-based web application framework.
                          </div>
                        </div>
                      </Label>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <ToggleSwitch
                      checked={projectsCompleted}
                      label="Technologies Used"
                      onChange={setProjectsCompleted}
                    />
                    <Select id="projects-completed" name="projects-completed">
                      <option>Min</option>
                      <option>Max</option>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <ToggleSwitch
                      checked={technologiesUsed}
                      label="Technologies Used"
                      onChange={setTechnologiesUsed}
                    />
                    <Select id="technologies-used" name="technologies-used">
                      <option>Min</option>
                      <option>Max</option>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <ToggleSwitch
                      checked={numberReviews}
                      label="Number of reviews"
                      onChange={setNumberReviews}
                    />
                    <Select id="number-of-reviews" name="number-of-reviews">
                      <option>Min</option>
                      <option selected>Max</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex w-full justify-center space-x-4 pb-4 md:px-4">
                <Button type="submit" className="w-full">
                  Apply filters
                </Button>
                <Button color="gray" outline type="reset" className="w-full">
                  Clear all
                </Button>
              </div>
            </div>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
