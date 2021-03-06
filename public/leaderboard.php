<?php
require __DIR__ . '/../vendor/autoload.php';
$bar = new \Honest\Bar();
$overall = $bar->getOverallLeaderboard();
?>

<link rel="stylesheet" href="css/leaderboard.css">
<div id="devMenu" class="modal-toggle"></div>
<h2 id="up">↑ Scroll up to pour beer ↑</h2>
<div class="ranking-table-data-leader-1">
    <div class="medal-glasscase">
        <div class="the-medal with-ribbon"></div><span id="medal-one">Winners</span>
    </div>
</div>


<section class="ranking">
    <div class="contain">
        <h2 class="main-text">Overall winner</h2>
        <div class="ranking-table">
            <div class="ranking-table-header-row">
                <div class="ranking-table-header-data h6">Rank</div>
                <div class="ranking-table-header-data h6">Name</div>
                <div class="ranking-table-header-data h6">Total Pints</div>
            </div>
            <?php foreach ($bar->getFirstThree($overall) as $position => $person) :?>
                <?php $position = $position + 1 ?>
                <div class="ranking-table-row-leader-<?php echo $position ?>">
                    <div class="ranking-table-data-leader-<?php echo $position ?>">
                        <img src="images/trophy-<?php echo $position ?>.png">
                    </div>
                    <div class="ranking-table-data">
                        <?php echo $person->getFullName() ?>
                    </div>
                    <div class="ranking-table-data">
                        <?php echo $person->getDrinks() ?> x <img src="images/beer.png">
                    </div>
                </div>
            <?php endforeach; ?>
            <div class="ranking-table-body">
                <?php foreach ($bar->getRemaining($overall) as $position => $person) :?>
                    <div class="ranking-table-row">
                        <?php $position = $position + 4 ?>
                        <div class="ranking-table-data">
                            <?php echo $position ?>
                        </div>
                        <div class="ranking-table-data">
                            <?php echo $person->getFullName() ?>
                        </div>
                        <div class="ranking-table-data">
                            <?php echo $person->getDrinks() ?> x <img src="images/beer.png">
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

</section>


<div class="modal">
    <div class="modal-overlay modal-toggle"></div>
    <div class="modal-wrapper modal-transition">
        <div class="modal-header">
            <button class="modal-close modal-toggle">
                x
            </button>
            <h3 class="modal-heading">Menu</h3>
        </div>

        <div class="modal-body">
            <div class="modal-content">
                <br><br>
                <a href="/">
                    <button>View home</button>
                </a>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="js/home.js"></script>
