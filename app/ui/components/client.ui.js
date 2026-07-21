/* Round 7 Client-only semantic decorator. Existing renderers remain authoritative. */
(function(){
  const screenIds = ['screen-dashboard', 'screen-project', 'screen-approvals'];
  let scheduled = false;
  let modalReturnTarget = null;
  function attr(node, name, value){ if (node && node.getAttribute(name) !== String(value)) node.setAttribute(name, String(value)); }
  function visible(node){ return !!node && !node.classList.contains('hidden'); }
  function syncTabs(){
    const timelineVisible = visible(document.getElementById('clientProjectTimelinePanel'));
    document.querySelectorAll('[data-project-tab]').forEach(function(button){
      const value = button.getAttribute('data-project-tab');
      const selected = value === (timelineVisible ? 'timeline' : 'assets');
      attr(button, 'role', 'tab'); attr(button, 'aria-selected', selected); attr(button, 'tabindex', selected ? 0 : -1);
      attr(button, 'aria-controls', value === 'timeline' ? 'clientProjectTimelinePanel' : 'clientProjectAssetsPanel');
    });
    attr(document.getElementById('clientProjectTimelinePanel'), 'role', 'tabpanel'); attr(document.getElementById('clientProjectTimelinePanel'), 'aria-hidden', !timelineVisible);
    attr(document.getElementById('clientProjectAssetsPanel'), 'role', 'tabpanel'); attr(document.getElementById('clientProjectAssetsPanel'), 'aria-hidden', timelineVisible);
  }
  function syncFilters(){ document.querySelectorAll('[data-project-chain-filter]').forEach(function(button){ attr(button, 'aria-pressed', button.classList.contains('bg-brand-primary')); }); }
  function syncApprovalQueue(){
    document.querySelectorAll('[data-approval-card]').forEach(function(button){ attr(button, 'aria-pressed', button.classList.contains('bg-bg-secondary')); button.classList.add('ordo-client-approval-row'); });
    attr(document.getElementById('clientApprovalList'), 'aria-label', '승인 대기 Module'); attr(document.getElementById('clientApprovalDetail'), 'aria-live', 'polite');
  }
  function syncModal(){ const modal=document.getElementById('cardDetailModal'); if(!modal)return; attr(modal,'aria-hidden',!visible(modal)); const dialog=modal.querySelector('[role="dialog"]'); if(dialog){dialog.classList.add('ordo-c-dialog');attr(dialog,'tabindex',-1);} }
  function sync(){ scheduled=false; syncTabs(); syncFilters(); syncApprovalQueue(); syncModal(); screenIds.forEach(function(id){const screen=document.getElementById(id);if(!screen)return;screen.querySelectorAll('.overflow-x-auto').forEach(function(scroller){attr(scroller,'tabindex',0);if(!scroller.hasAttribute('aria-label'))attr(scroller,'aria-label','가로 스크롤 영역');});}); }
  function schedule(){ if(scheduled)return; scheduled=true; requestAnimationFrame(sync); }
  function bind(){
    document.addEventListener('click',function(event){const card=event.target.closest('[data-project-card-id]');if(card)modalReturnTarget=card;if(event.target.closest('#cardDetailClose')&&modalReturnTarget)requestAnimationFrame(function(){modalReturnTarget.focus();});});
    document.addEventListener('keydown',function(event){const modal=document.getElementById('cardDetailModal');if(event.key==='Escape'&&modalReturnTarget&&modal&&!visible(modal))requestAnimationFrame(function(){modalReturnTarget.focus();});});
    const modal=document.getElementById('cardDetailModal');if(modal)new MutationObserver(function(){const open=visible(modal);syncModal();if(open)requestAnimationFrame(function(){modal.querySelector('[role="dialog"]')?.focus();});}).observe(modal,{attributes:true,attributeFilter:['class']});
    const observer=new MutationObserver(schedule);screenIds.map(function(id){return document.getElementById(id);}).filter(Boolean).forEach(function(root){observer.observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});});
  }
  bind(); schedule(); window.ORDO_CLIENT_UI={sync:sync,schedule:schedule};
})();
