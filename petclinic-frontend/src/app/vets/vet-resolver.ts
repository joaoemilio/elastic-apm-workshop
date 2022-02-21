/*
 *
 *  * Copyright 2016-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {VetService} from './vet.service';
import {Vet} from './vet';

/**
 * @author Vitaliy Fedoriv
 */

@Injectable()
export class VetResolver implements Resolve<Vet> {

  constructor(private vetService: VetService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vet> | Promise<Vet> | Vet {
    return this.vetService.getVetById(route.paramMap.get('id'));
  }

}
