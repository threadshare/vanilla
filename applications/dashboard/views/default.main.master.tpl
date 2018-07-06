{extends file="default.master.tpl"}
{block name="_body"}
    <div id="Body">
        <div class="_container">
            <div class="">
                <div class="BreadcrumbsWrapper">{breadcrumbs}</div>
            </div>
        </div>
        <div class="_pageContents">
            <div class="_fullBackgroundContainer"></div>
            <div class="_page">
                <div class="_pageMinHeight">
                    {asset name="Header"}
                    <div class="_messages"></div>
                    {asset name="Content"}
                    {asset name="Foot"}
                    <div class="_stickyBottom"></div>
                </div>
            </div>
            <div class="_overlays"></div>
        </div>
    </div>
{/block}
