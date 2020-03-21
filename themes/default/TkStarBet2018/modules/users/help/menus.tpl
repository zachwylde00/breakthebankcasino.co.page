			<script type="text/javascript">
				window.onload = function(){
					document.getElementsByClassName('selector')[0].onchange = function(){
						var $this_value = this.value;
						window.location = $this_value;
					}
				}
			</script>
			<div class="left static-menu">
				<div class="link-container">
					<div class="desktop">
						<a href="{site_url}users/help/100"{if strpos(getenv('REQUEST_URI'), 'users/help/100') !== false} class="active"{/if}>شرایط و ضوابط عضویت</a>
						<a href="{site_url}users/help/101"{if strpos(getenv('REQUEST_URI'), 'users/help/101') !== false} class="active"{/if}>راهنمای پیش بینی</a>
						<a href="{site_url}users/help/102"{if strpos(getenv('REQUEST_URI'), 'users/help/102') !== false} class="active"{/if}>آموزش ثبت فرم میکس</a>
						<a href="{site_url}users/help/103"{if strpos(getenv('REQUEST_URI'), 'users/help/103') !== false} class="active"{/if}>راهنمای تخته نرد</a>
						<a href="{site_url}users/help/104"{if strpos(getenv('REQUEST_URI'), 'users/help/104') !== false} class="active"{/if}>راهنمای رولت</a>
						<a href="{site_url}users/help/105"{if strpos(getenv('REQUEST_URI'), 'users/help/105') !== false} class="active"{/if}>راهنمای بلک جک (21)</a>
						<a href="{site_url}users/help/106"{if strpos(getenv('REQUEST_URI'), 'users/help/106') !== false} class="active"{/if}>راهنمای باکارات</a>
						<a href="{site_url}users/help/107"{if strpos(getenv('REQUEST_URI'), 'users/help/107') !== false} class="active"{/if}>راهنمای پاسور یا 4 برگ</a>
						<a href="{site_url}users/help/108"{if strpos(getenv('REQUEST_URI'), 'users/help/108') !== false} class="active"{/if}>روش های برداشت موجودی</a>
						<a href="{site_url}users/help/109"{if strpos(getenv('REQUEST_URI'), 'users/help/109') !== false} class="active"{/if}>نحوه کار با پرفکت مانی</a>
						<a href="{site_url}users/help/110"{if strpos(getenv('REQUEST_URI'), 'users/help/110') !== false} class="active"{/if}>احراز هویت</a>
						<a href="{site_url}users/help/111"{if strpos(getenv('REQUEST_URI'), 'users/help/111') !== false} class="active"{/if}>قمار ایمن</a>
						<a href="{site_url}users/help/112"{if strpos(getenv('REQUEST_URI'), 'users/help/112') !== false} class="active"{/if}>دزدی ها و کلاهبرداری های اینترنتی</a>
					</div>
					<div class="mobile">
						<select class="selector">
							<option value="{site_url}users/help/100"{if strpos(getenv('REQUEST_URI'), 'users/help/100') !== false} selected="selected"{/if}>شرایط و ضوابط عضویت</option>
							<option value="{site_url}users/help/101"{if strpos(getenv('REQUEST_URI'), 'users/help/101') !== false} selected="selected"{/if}>راهنمای پیش بینی</option>
							<option value="{site_url}users/help/102"{if strpos(getenv('REQUEST_URI'), 'users/help/102') !== false} selected="selected"{/if}>آموزش ثبت فرم میکس</option>
							<option value="{site_url}users/help/103"{if strpos(getenv('REQUEST_URI'), 'users/help/103') !== false} selected="selected"{/if}>راهنمای تخته نرد</option>
							<option value="{site_url}users/help/104"{if strpos(getenv('REQUEST_URI'), 'users/help/104') !== false} selected="selected"{/if}>راهنمای رولت</option>
							<option value="{site_url}users/help/105"{if strpos(getenv('REQUEST_URI'), 'users/help/105') !== false} selected="selected"{/if}>راهنمای بلک جک (21)</option>
							<option value="{site_url}users/help/106"{if strpos(getenv('REQUEST_URI'), 'users/help/106') !== false} selected="selected"{/if}>راهنمای باکارات</option>
							<option value="{site_url}users/help/107"{if strpos(getenv('REQUEST_URI'), 'users/help/107') !== false} selected="selected"{/if}>راهنمای پاسور یا 4 برگ</option>
							<option value="{site_url}users/help/108"{if strpos(getenv('REQUEST_URI'), 'users/help/108') !== false} selected="selected"{/if}>روش های برداشت موجودی</option>
							<option value="{site_url}users/help/109"{if strpos(getenv('REQUEST_URI'), 'users/help/109') !== false} selected="selected"{/if}>نحوه کار با پرفکت مانی</option>
							<option value="{site_url}users/help/110"{if strpos(getenv('REQUEST_URI'), 'users/help/110') !== false} selected="selected"{/if}>احراز هویت</option>
							<option value="{site_url}users/help/111"{if strpos(getenv('REQUEST_URI'), 'users/help/111') !== false} selected="selected"{/if}>قمار ایمن</option>
							<option value="{site_url}users/help/112"{if strpos(getenv('REQUEST_URI'), 'users/help/112') !== false} selected="selected"{/if}>دزدی ها و کلاهبرداری های اینترنتی</option>
						</select>
					</div>
				</div>
			</div>