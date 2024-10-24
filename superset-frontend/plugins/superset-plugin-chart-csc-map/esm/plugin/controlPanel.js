function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t, validateNonEmpty } from '@superset-ui/core';
import { sharedControls } from '@superset-ui/chart-controls';
var config = {
  // For control input types, see: superset-frontend/src/explore/components/controls/index.js
  controlPanelSections: [{
    label: t('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'cols',
      config: _extends({}, sharedControls.groupby, {
        label: t('Columns'),
        description: t('Columns to group by')
      })
    }], [{
      name: 'metrics',
      config: _extends({}, sharedControls.metrics, {
        validators: [validateNonEmpty]
      })
    }], ['adhoc_filters'], [{
      name: 'row_limit',
      config: sharedControls.row_limit
    }]]
  }, {
    label: t('Hello Controls!'),
    expanded: true,
    controlSetRows: [[{
      name: 'header_text',
      config: {
        type: 'TextControl',
        default: 'Hello, World!',
        renderTrigger: true,
        // ^ this makes it apply instantaneously, without triggering a "run query" button
        label: t('Header Text'),
        description: t('The text you want to see in the header')
      }
    }], [{
      name: 'bold_text',
      config: {
        type: 'CheckboxControl',
        label: t('Bold Text'),
        renderTrigger: true,
        default: true,
        description: t('A checkbox to make the ')
      }
    }], [{
      name: 'header_font_size',
      config: {
        type: 'SelectControl',
        label: t('Font Size'),
        default: 'xl',
        choices: [
        // [value, label]
        ['xxs', 'xx-small'], ['xs', 'x-small'], ['s', 'small'], ['m', 'medium'], ['l', 'large'], ['xl', 'x-large'], ['xxl', 'xx-large']],
        renderTrigger: true,
        description: t('The size of your header font')
      }
    }]]
  }]
};
export default config;