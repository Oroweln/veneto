<script>
    let { size = 'leaderboard' } = $props();

    const dimensions = {
      leaderboard: { width: '728px', height: '90px', label: '728 × 90' },
      rectangle:   { width: '300px', height: '250px', label: '300 × 250' },
      billboard:   { width: '970px', height: '250px', label: '970 × 250' },
    };

    let dim = $derived(dimensions[size]);
</script>

<div class="ad-placeholder" style="width:{dim.width}; height:{dim.height}">
   <span class="label">Advertisement</span>
   <span class="dims">{dim.label}</span>
</div>

<style>
   .ad-placeholder {
     border: 2px dashed var(--border);
     background: var(--sand-light);
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 4px;
     max-width: 100%;
   }
</style>
