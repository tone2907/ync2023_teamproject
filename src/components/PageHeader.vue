<template>
	<header>
		<nav class="navbar navbar-expand-lg">
			<div class="container">
				<a class="navbar-brand" href="#">
					<img
						class="navbar-brand-item light-mode-item"
						src="../assets/images/logo.svg"
						alt="logo"
					/>
				</a>
				<!-- 반응형인데 어케쓰는질 모르겠숴요
				<button
					class="navbar-toggler ms-auto"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="text-body h6 d-none d-sm-inline-block">Menu</span>
					<span class="navbar-toggler-icon"></span>
				</button>
        -->
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav navbar-nav-scroll mx-auto">
						<!-- Nav item 1 News -->
						<li class="nav-item">
							<a class="nav-link" href="#">News</a>
						</li>
						<!-- Nav item 2 Game Drop -->
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="pagesMenu"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								>Games</a
							>
							<ul class="dropdown-menu" aria-labelledby="pagesMenu">
								<!-- Dropdown submenu -->
								<li class="dropdown-submenu dropend">
									<a class="dropdown-item dropdown-toggle" href="#">플랫폼</a>
									<ul
										class="dropdown-menu dropdown-menu-start"
										data-bs-popper="none"
									>
										<li><a class="dropdown-item" href="#">스팀</a></li>
										<li><a class="dropdown-item" href="#">PS</a></li>
										<li><a class="dropdown-item" href="#">XBOX</a></li>
									</ul>
								</li>
								<!-- Dropdown submenu -->
								<li class="dropdown-submenu dropend">
									<a class="dropdown-item dropdown-toggle" href="#">장르</a>
									<ul
										class="dropdown-menu dropdown-menu-start"
										data-bs-popper="none"
									>
										<li><a class="dropdown-item" href="#">FPS</a></li>
										<li><a class="dropdown-item" href="#">RPG</a></li>
										<li><a class="dropdown-item" href="#">레이싱게임</a></li>
									</ul>
								</li>
								<!--  -->
								<li class="dropdown-submenu dropend">
									<a class="dropdown-item dropdown-toggle" href="#">상점</a>
									<ul
										class="dropdown-menu dropdown-menu-start"
										data-bs-popper="none"
									>
										<li><a class="dropdown-item" href="#">스팀</a></li>
										<li><a class="dropdown-item" href="#">오리진</a></li>
										<li><a class="dropdown-item" href="#">레이싱게임</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<!-- Nav item 3 Forum -->
						<li class="nav-item">
							<a class="nav-link" href="#.html">Forum</a>
						</li>
						<!-- Nav item 4 Us-->
						<li class="nav-item">
							<a class="nav-link" href="#.html">About us</a>
						</li>
					</ul>
				</div>
				<div class="nav flex-nowrap align-items-center">
					<!-- Nav Button -->
					<div class="nav-item d-none d-md-block">
						<a href="signin.html" class="btn">Login / Join</a>
					</div>
					<!-- Nav Search -->
					<div class="nav-item dropdown dropdown-toggle-icon-none nav-search">
						<a
							class="nav-link dropdown-toggle"
							role="button"
							href="#"
							id="navSearch"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i class="bi bi-search fs-4"> </i>
						</a>
						<div
							class="dropdown-menu dropdown-menu-end shadow rounded p-2"
							aria-labelledby="navSearch"
						>
							<form class="input-group">
								<input
									class="form-control border-success"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button class="btn btn-success m-0" type="submit">
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
	<div class="border-bottom border-2 border-primary opacity-1"></div>
</template>

<style scoped></style>
