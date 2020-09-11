import { theme } from './menu';

const tipGroups = [
  {
    panel: {
      name: 'selectTip',
      title: 'Selection',
      tips: [
        {
          message: 'To draw a continuous line or polygon, long press and drag your cursor',
          title: 'Freehand Drawing'
        },
        {
          message: 'To draw a continuous line or polygon, long press and drag your cursor',
          title: 'Freehand Drawing'
        }
      ]
    }
  },
  {
    panel: {
      name: 'propertySearchTip',
      title: 'Property Search',
      tips: [
        {
          message:
            'To search by a portion of an owner name or address, hit enter without selecting form the list of suggestions.',
          title: 'Wildcard Search'
        },
        {
          message: 'To quickly select a property from the map, long press on a property on the map.',
          title: 'Long Press'
        },
        {
          message: 'To select by a location use the property selection tool.',
          title: 'Select By Location'
        },
        {
          message: 'Previous "tab" layout has been consolidated into a single scrollable panel.',
          title: 'Single Details Panel'
        }
      ]
    }
  },
  {
    panel: {
      name: 'basemapTip',
      title: 'Basemaps',
      tips: [
        {
          message:
            'The imagery and imagery hybrid base maps listed under the maps tab is a combination of the latest imagery from Raleigh (2019) and from the State of North Carolina (2017).',
          title: 'Imagery Basemaps'
        }
      ]
    }
  }
];
export function initTips() {
  document.querySelectorAll('.tip').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('calcite-tip-manager')?.remove();
      item.parentElement?.parentElement?.removeAttribute('dismissed');
      item.parentElement?.parentElement?.classList.remove('hidden');
      const manager = document.createElement('calcite-tip-manager');
      manager.setAttribute('theme', theme);
      const tipGroup = tipGroups.find(group => {
        return group.panel.name === item.id;
      });

      const group = document.createElement('calcite-tip-group');
      group.setAttribute('text-group-title', (tipGroup as any)?.panel.title);
      manager.appendChild(group);
      tipGroup?.panel.tips.forEach(tip => {
        const calciteTip = document.createElement('calcite-tip');
        calciteTip.setAttribute('heading', tip.title);
        const p = document.createElement('p');
        p.innerHTML = tip.message;
        calciteTip.appendChild(p);
        group.appendChild(calciteTip);
      });
      document?.body?.appendChild(manager);
    });
  });
}
