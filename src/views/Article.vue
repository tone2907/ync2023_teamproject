<template>
	<html lang="en">
		<head>
			<meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	    <meta name="author" content="Webestica.com">
    	<meta name="description" content="Bootstrap based News, Magazine and Blog Theme">

      <link rel="shortcut icon" href="assets/images/favicon.ico">

      <link rel="preconnect" href="https://fonts.gstatic.com">
	    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Rubik:wght@400;500;700&display=swap" rel="stylesheet">

      <link rel="stylesheet" type="text/css" href="assets/vendor/all.min.css">
	    <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap-icons.css">
	    <link rel="stylesheet" type="text/css" href="assets/vendor/apexcharts.css">
      <link rel="stylesheet" type="text/css" href="assets/vendor/quill.snow.css">

      <link id="style-switch" rel="stylesheet" type="text/css" href="assets/vendor/style.css">
			<title>Article</title>
		</head>
		<body>
      <main>
        <section class="py-4">
          <div class="container">
            <div class="row pb-4">
              <div class="col-12">
                <div class="d-sm-flex justify-content-sm-between align-items-center"> 
                  <h1 class="mb-2 mb-sm-0 h2">게시글</h1>			
					        <a href="../Article/create" class="btn btn-sm btn-primary mb-0">+<i class="fas fa-plus me-2"></i> 글쓰기</a>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col-12">
                <div class="row g-4 mb-4">
                  <div class="card border bg-transparent rounded-3">
                    <div class="card-body p-3">
                      <div class="row g-3 align-items-center justify-content-between mb-3">
                        <div class="col-md-3">
                          <form>
                            <select class="form-select z-index-9 bg-transparent" aria-label=".form-select-sm">
                              <option value="">전체</option>
                              <option>공지</option>
                              <option>공략</option>
                              <option>자유글</option>
                            </select>
                          </form>
                        </div>
                      </div>
                      <div class="board-list">
                        <table class="table table-hover table-bordered">
                          <thead class="table-dark">
                            <tr>
                              <th scope="col" class="text-lg-center">번호</th>
                              <th scope="col" class="text-lg-center">머리글 </th>
                              <th scope="col" class="col-5">제목</th>
                              <th scope="col" class="col-2">이름</th>
                              <th scope="col" class="text-md-center">좋아요</th>
                              <th scope="col" class="text-md-center">댓글</th>
                              <th scope="col" class="text-md-center">날짜</th>
                              <th scope="col" class="text-md-center">조회</th>
                            </tr>
                          </thead>
                          <tbody class="border-top-0">
                            <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">15</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td> 
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2" align="left"><a href="#">title</a></h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>1
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>0
                      </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>1
                        </td>
                    </tr>
                    <!-- Table item -->
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">14</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="../Article/detail">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>3
                      </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>

                    <!-- Table item -->
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">13</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-danger mt-2">공지</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->                    
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>

                    <!-- Table item -->
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">12</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-success mt-2">공략</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>

                    <!-- Table item -->
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">11</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>

                    <!-- Table item -->
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">10</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <!-- Table item -->
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">9</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <!-- Table item -->
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">8</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-success mt-2">공략</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <!-- Table item -->
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">7</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">6</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">5</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">4</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">3</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">2</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                    <tr>
                      <!-- Table data -->
                      <td>
                        <h6 class="text-center mt-2">1</h6>
                      </td>
                      <!-- Table data -->
                      <td>
                        <h6 class="badge text-bg-warning mt-2">자유글</h6>
                      </td>
                      <!-- Table data -->
                      <td><h6 class="course-title mt-2" align="left"><a href="dashboard-post-detail.html">title</a></h6></td>
                      <!-- Table data -->
                      <td>
                        <h6 class="course-title mt-2">name</h6>
                      </td>
                      <!-- Table data -->
                      <td class="text-lg-center">
                        <h6 class="course-title mt-2"></h6>10
                      </td>
                      <!-- Table data -->
                        <td class="text-lg-center">
                          <h6 class="course-title mt-2"></h6>3
                        </td>
                      <td><h6 class="course-title mt-2"></h6>2023-09-23</td>
                      <td class="text-center">
                        <h6 class="course-title mt-2"></h6>100
                      </td>
                    </tr>
                  </tbody>
               </table>
            </div>
                      <!-- Pagination START -->
              <div class="d-sm-flex justify-content-sm-center align-items-sm-center mt-4 mt-sm-3">             
                <!-- Pagination -->
                <nav class="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
                  <ul class="pagination pagination-sm pagination-bordered mb-2">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Prev</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="Article">1</a></li>
                    <li class="page-item "><a class="page-link" href="Article">2</a></li>
                    <li class="page-item "><a class="page-link" href="3">3</a></li>
                    <li class="page-item "><a class="page-link" href="4">4</a></li>
                    <li class="page-item "><a class="page-link" href="5">5</a></li>
                    <li class="page-item "><a class="page-link" href="6">6</a></li>
                    <li class="page-item "><a class="page-link" href="7">7</a></li>
                    <li class="page-item "><a class="page-link" href="8">8</a></li>
                    <li class="page-item "><a class="page-link" href="9">9</a></li>
                    <li class="page-item "><a class="page-link" href="10">10</a></li>
                    <li class="page-item">
                      <a class="page-link" tabindex="1" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
                  <!-- Pagination END -->
                  <!--search-->
                 <div class="d-sm-flex justify-content-sm-between align-items-center"> 
                      <select class="form-select" aria-label=".select-sm">
                        <option value="">선택</option>
                        <option>제목</option>
                        <option>작성자</option>
                        <option>내용</option>
                      </select>
                      &nbsp;
                     <input class="form-control" type="search" placeholder="Search" aria-label="Search">&nbsp;
                     <button class="form-control">검색</button>
                 </div>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
        </section>
      </main>     
    </body>
	</html>
</template>
