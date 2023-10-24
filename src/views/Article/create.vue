<template>
  <html lang="en">
  <head>
    <title>create</title>
  </head>
  <body>
<!-- **************** MAIN CONTENT START **************** -->
<main>

<!-- =======================
Main contain START -->
<section class="py-4">
	<div class="container">
    <div class="row pb-4">
			<div class="col-12">
        <!-- Title -->
				<h1 class="mb-0 h2">Create a post</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<!-- Chart START -->
				<div class="card border">
					<!-- Card body -->
					<div class="card-body">
            <!-- Form START -->
            <form>
              <!-- Main form -->
              <div class="row">
                <div class="cols-12">
                  <!-- Post name -->
                  <div class="mb-3">
                    <label class="form-label">Post name</label>
                    <input required id="con-name" name="name" type="text" class="form-control" placeholder="Post name">
                  </div>
									<div class="mb-1" style="float:left">
                    <label class="form-label">머리글</label>&nbsp;
                      <input type="checkbox" value="1" v-model="check" @change="click" >자유글
											<input type="checkbox" value="2" v-model="check" @change="click">공략
											<input type="checkbox" value="3" v-model="check" @change="click">공지
                  </div>
                </div>
              <!-- Main toolbar -->
                <div class="col-md-12">
                  <!-- Subject -->
                  <div class="mb-3">
                    <textarea class="form-control" rows="20" name="content" id="content" placeholder="내용을 입력해 주세요" style="resize:none"></textarea>
                  </div>	
                </div>
                <div class="col-12">
                  <div class="mb-3">
                  <!-- Image -->
                  <div class="position-relative">
                    <h6 class="my-2">Upload<a href="#!" class="text-primary">Browse</a></h6>
                    <label class="w-100" style="cursor:pointer;">
                      <span> 
                        <input class="form-control stretched-link" type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png">
                      </span>
                    </label>
                  </div>
                  </div>
                </div>
                <!-- Create post button -->
                <div class="col-md-12 text-start">
                  <button class="btn btn-primary w-100" type="submit">Create post</button>
                </div>
              </div>
            </form>
            <!-- Form END -->
					</div>
				</div>
				<!-- Chart END -->
			</div>
    </div>
	</div>
</section>
<!-- =======================
Main contain END -->

</main>
  </body>
  </html>
</template>

<script>
/*머리글 중복 금지*/
export default {
   props:['removeValue'],
    data(){
        return{
            check:[],
            isAllChecked:true
        }
    },
  methods:{
   click(event){
    for(let i=0; i<this.check.length;i++){
      if(this.check[i] !==event.target.value){
        console.log(this.check[i])
        this.check.splice(i,1);
      }
    }
   },
   computed:{

   } 
  }
}
</script>
