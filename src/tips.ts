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
      const tipGroup = tipGroups.find(group => {
        return group.panel.name === item.id;
      });

      const group = document.createElement('calcite-tip-group');
      group.setAttribute('text-group-title', tipGroup?.panel.title);
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
