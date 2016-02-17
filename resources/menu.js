var menuNovi = `
    <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <li>
            <a href="../index/index.html">
                <i class="fa fa-dashboard"></i> <span>Početna</span>
            </a>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-laptop"></i>
                <span>Časovi</span>
                <i class="fa fa-angle-left pull-right"></i>
            </a>
          <ul class="js-menu treeview-menu">
            <li><a href="../cas13/index.html"><i class="fa fa-circle-o"></i> Čas 13</a></li>
            <li><a href="../cas14/index.html"><i class="fa fa-circle-o"></i> Čas 14</a></li>
            <li><a href="../cas15/index.html"><i class="fa fa-circle-o"></i> Čas 15</a></li>
            <li><a href="../cas16/index.html"><i class="fa fa-circle-o"></i> Čas 16</a></li>
          </ul>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-calendar"></i> <span>Kalendar</span>
                <small class="label pull-right bg-red">0</small>
            </a>
        </li>
        <li><a href="../../documentation/index.html"><i class="fa fa-book"></i> <span>Pravila</span></a></li>
    </ul>
`;

(function() {
    $(".js-menu").html(menuNovi);
})();
