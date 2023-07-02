import React from 'react';

import Accordion from '@salesforce/design-system-react/components/accordion'; // `~` is replaced with design-system-react at runtime
import AccordionPanel from '@salesforce/design-system-react/components/accordion/panel'; // `~` is replaced with design-system-react at runtime
import IconSettings from '@salesforce/design-system-react/components/icon-settings'; // `~` is replaced with design-system-react at runtime
import Dropdown from '@salesforce/design-system-react/components/menu-dropdown'; // `~` is replaced with design-system-react at runtime

import PopupCmp from './popupCmp'

import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

const root = createRoot(document.getElementById('app'));
root.render(<PopupCmp />);